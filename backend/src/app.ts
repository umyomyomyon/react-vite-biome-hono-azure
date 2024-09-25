import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
const origin = process.env.CORS_ORIGIN || "http://localhost:5173";
app.use(
	cors({
		origin,
		allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
		maxAge: 600,
		credentials: true,
	}),
);

app.get("/hello", (c) => c.text("Hello Azure Functions!"));

export default app;
