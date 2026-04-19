export async function onRequestPost({ request, env }) {
  try {
    const { name, contactNumber, plan, amount } = await request.json();

    const webhookUrl = env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: new Date().toISOString(),
            name,
            contactNumber,
            plan,
            amount,
          }),
        });
      } catch (error) {
        console.error("Failed to forward to webhook:", error);
      }
    }

    return new Response(JSON.stringify({ success: true, message: "Lead captured" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Bad Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
