import { Hono } from "hono";
import taskRoutes from "./routers/taskRoutes";
import noteRoutes from "./routers/noteRoutes";
import userRoutes from "./routers/userRoutes";
import authRoutes from "./routers/authRoutes";
import { checkAuth } from "./middlewares/checkAuth";
import mongoConfig from "./config/mongo";

const app = new Hono();
mongoConfig();

app.use("/api/tasks/*", checkAuth);
app.use("/api/notes/*", checkAuth);
app.use("/api/users/*", checkAuth);

app.route("/api/tasks", taskRoutes);
app.route("/api/notes", noteRoutes);
app.route("/api/users", userRoutes);
app.route("/auth", authRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
