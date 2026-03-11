import { Hono } from "hono";
import { cors } from "hono/cors";
import health from "./routes/health";
import contact from "./routes/contact";

const app = new Hono();

// Enable CORS for API routes
app.use("/api/*", cors());

// Health routes
app.route("/api/health", health);

// Contact routes
app.route("/api/contact", contact);

// Health check endpoint
app.get("/api/", (c) => c.json({ name: "Hayyat API", version: "1.0.0", status: "healthy" }));

export default app;
