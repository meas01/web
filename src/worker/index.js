import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono();

// API routes
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Serve static assets
app.use("/*", serveStatic({ root: "./" }));

export default app;