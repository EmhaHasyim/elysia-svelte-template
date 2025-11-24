import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia 🦊")

export default app