import { NextResponse } from "next/server";

// TODO: this currently only logs the submission on the server.
// The next step in the project plan is to connect this route to
// Supabase so submissions are stored permanently and an email
// notification is sent. Until then, submitted leads are NOT saved
// anywhere — check the WhatsApp button as the reliable channel.
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.company || !data.email) {
      return NextResponse.json(
        { ok: false, error: "missing_required_fields" },
        { status: 400 }
      );
    }

    console.log("New Nomo Online lead:", data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}
