// src/app.ts
import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hello Azure Functions! Hoge"));

export default app;
