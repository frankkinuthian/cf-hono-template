import { Hono } from "hono";

const app = new Hono();

// -----
app.get("/api/health", (c) => c.json("Hono server is running!"));

export default app;
