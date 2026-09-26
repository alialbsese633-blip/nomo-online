import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}
