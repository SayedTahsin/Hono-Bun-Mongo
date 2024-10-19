import { Context } from "hono";
import Task from "../models/Task";

export const createTask = async (c: Context) => {
  try {
    const { text, status, mail, category } = await c.req.json();

    const newTask = new Task({ text, status, mail, category });
    const savedTask = await newTask.save();

    return c.json(savedTask, 201);
  } catch (error) {
    return c.json({ message: "Error creating task", error }, 500);
  }
};

export const getTasksByMail = async (c: Context) => {
  try {
    const { mail } = c.req.param();

    const tasks = await Task.find({ mail });

    if (tasks.length === 0) {
      return c.json({ message: "No tasks found for this email." }, 404);
    }

    return c.json(tasks, 200);
  } catch (error) {
    return c.json({ message: "Server error", error }, 500);
  }
};

export const updateTask = async (c: Context) => {
  try {
    const { text, status } = await c.req.json();
    const { id } = c.req.param();

    const task = await Task.findByIdAndUpdate(
      id,
      { text, status },
      { new: true }
    );

    if (task) {
      return c.json(task, 200);
    } else {
      return c.json({ message: "Task not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error updating task", error }, 500);
  }
};

export const deleteTask = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const task = await Task.findByIdAndDelete(id);
    if (task) {
      return c.json({ message: "Task deleted successfully" }, 200);
    } else {
      return c.json({ message: "Task not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error deleting task", error }, 500);
  }
};
