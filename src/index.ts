import { Hono } from "hono";
import taskRoutes from "./routers/taskRoutes";
import mongoConfig from "./config/mongo";
const app = new Hono();
mongoConfig();

app.route("/api/task", taskRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: Bun.env.PORT,
  fetch: app.fetch,
};
