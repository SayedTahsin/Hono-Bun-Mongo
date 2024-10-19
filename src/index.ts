import { Hono } from "hono";
import taskRoutes from "./routers/taskRoutes";
import noteRoutes from "./routers/noteRoutes";
import userRoutes from "./routers/userRoutes";
import mongoConfig from "./config/mongo";
const app = new Hono();
mongoConfig();

app.route("/api/tasks", taskRoutes);
app.route("/api/notes", noteRoutes);
app.route("/api/users", userRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: Bun.env.PORT,
  fetch: app.fetch,
};
