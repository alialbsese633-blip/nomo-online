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
    // Notification failures must never block saving the lead.
    console.error("CallMeBot WhatsApp notification failed:", err);
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

    // Must be awaited: on Vercel's serverless runtime, the function
    // can be frozen the instant a response is returned, which kills
    // any request still in flight. A failure here is caught inside
    // sendWhatsAppNotification and never turns into an error for the
    // visitor — the lead is already saved above regardless.
    await sendWhatsAppNotification(data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}
