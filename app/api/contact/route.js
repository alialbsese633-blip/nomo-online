import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

async function sendWhatsAppNotification(data) {
  const phone = process.env.WHATSAPP_NOTIFY_PHONE;
  const apikey = process.env.WHATSAPP_NOTIFY_APIKEY;
  if (!phone || !apikey) return;

  const lines = [
    "*طلب جديد - نمو أونلاين*",
    `الاسم: ${data.name}`,
    `المنشأة: ${data.company}`,
    data.location ? `الموقع: ${data.location}` : null,
    data.whatsapp ? `واتساب: ${data.whatsapp}` : null,
    `الإيميل: ${data.email}`,
    data.service ? `الخدمة: ${data.service}` : null,
    data.problem ? `المشكلة: ${data.problem}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`;

  try {
    await fetch(url);
  } catch (err) {
    console.error("CallMeBot WhatsApp notification failed:", err);
  }
}

async function sendEmailNotification(data) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  const rows = [
    ["الاسم", data.name],
    ["اسم المنشأة", data.company],
    ["الدولة والمدينة", data.location],
    ["نوع المنشأة", data.type],
    ["عدد الغرف/الوحدات", data.units],
    ["رقم واتساب", data.whatsapp],
    ["البريد الإلكتروني", data.email],
    ["الموقع الإلكتروني", data.website],
    ["رابط Booking.com", data.booking_url],
    ["الخدمة المطلوبة", data.service],
    ["المشكلة الرئيسية", data.problem],
  ].filter(([, v]) => v);

  const html = `
    <div style="font-family:sans-serif;direction:rtl;text-align:right;">
      <h2>طلب جديد من موقع نمو أونلاين</h2>
      <table cellpadding="8" style="border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;border:1px solid #ddd;">${label}</td><td style="border:1px solid #ddd;">${value}</td></tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nomo Online <onboarding@resend.dev>",
        to: [to],
        subject: `طلب جديد من ${data.company}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend email failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Resend email notification failed:", err);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.company || !data.email) {
      return NextResponse.json(
        { ok: false, error: "missing_required_fields" },
        { status: 400 }
      );
    }

    if (!supabase) {
      console.error(
        "Supabase env vars are missing — set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return NextResponse.json(
        { ok: false, error: "database_not_configured" },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      company: data.company,
      location: data.location || null,
      type: data.type || null,
      units: data.units || null,
      whatsapp: data.whatsapp || null,
      email: data.email,
      website: data.website || null,
      booking_url: data.booking_url || null,
      service: data.service || null,
      problem: data.problem || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ ok: false, error: "db_insert_failed" }, { status: 500 });
    }

    // Both notification channels are awaited (Vercel can freeze the
    // function the instant a response is returned) and each fails
    // silently on its own — the lead is already saved above, so a
    // notification failure must never turn into an error for the visitor.
    await Promise.allSettled([
      sendWhatsAppNotification(data),
      sendEmailNotification(data),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}
