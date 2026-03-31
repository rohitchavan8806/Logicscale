import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for lead capture
  app.post("/api/leads", async (req, res) => {
    const { name, contactNumber, plan, amount } = req.body;
    console.log("New Lead Captured:", { name, contactNumber, plan, amount });

    // Forward to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
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
            amount
          }),
        });
        console.log("Successfully forwarded lead to Google Sheets.");
      } catch (error) {
        console.error("Failed to forward lead to Google Sheets:", error);
      }
    }

    res.json({ success: true, message: "Lead captured successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
