import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, contactNumber, plan, amount } = JSON.parse(event.body || '{}');
    console.log("New Lead Captured via Netlify:", { name, contactNumber, plan, amount });

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toISOString(),
          name,
          contactNumber,
          plan,
          amount
        }),
      });
      console.log("Successfully forwarded lead to Google Sheets.");
    } else {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not set in environment variables.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Lead captured successfully" }),
    };
  } catch (error) {
    console.error("Failed to process lead:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Internal Server Error" }),
    };
  }
};
