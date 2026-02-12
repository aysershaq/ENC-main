// مثال: extensions/backend/contact.ts (أو أي مكان API routes في مشروعك)

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message } = body ?? {};
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
    const MAIL_TO = process.env.MAIL_TO!;

    // Mailgun expects multipart/form-data :contentReference[oaicite:2]{index=2}
    const form = new FormData();
    form.append("from", `Website Contact <postmaster@${MAILGUN_DOMAIN}>`);
    form.append("to", MAIL_TO);
    form.append("subject", `Contact Form: ${subject}`);
    form.append(
      "text",
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        message,
      ].join("\n")
    );

    const auth = btoa(`api:${MAILGUN_API_KEY}`);

    const mgRes = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`, // basicAuth :contentReference[oaicite:3]{index=3}
      },
      body: form,
    });

    if (!mgRes.ok) {
      const errText = await mgRes.text();
      return new Response(JSON.stringify({ error: "Mailgun error", details: errText }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: "Server error", details: String(e?.message ?? e) }), { status: 500 });
  }
}
