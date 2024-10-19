import { Context } from "hono";
import User from "../models/User";

export const createUser = async (c: Context) => {
  try {
    const { name, mail, completedTasks, totalTasks } = await c.req.json();

    const newUser = new User({
      name,
      mail,
      completedTasks,
      totalTasks,
    });
    const savedUser = await newUser.save();

    return c.json(savedUser, 201);
  } catch (error) {
    return c.json({ message: "Error creating User", error }, 500);
  }
};

export const getUserByMail = async (c: Context) => {
  try {
    const { mail } = c.req.param();

    const user = await User.findOne({ mail });

    if (!user) {
      return c.json({ message: "No User found " }, 404);
    }

    return c.json(user, 200);
  } catch (error) {
    return c.json({ message: "Server error", error }, 500);
  }
};

export const updateUser = async (c: Context) => {
  try {
    const { name, completedTasks, totalTasks } = await c.req.json();
    const { id } = c.req.param();

    const user = await User.findByIdAndUpdate(
      id,
      { name, completedTasks, totalTasks },
      { new: true }
    );

    if (user) {
      return c.json(user, 200);
    } else {
      return c.json({ message: "User not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error updating User", error }, 500);
  }
};

export const deleteUser = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const user = await User.findByIdAndDelete(id);
    if (user) {
      return c.json({ message: "User deleted successfully" }, 200);
    } else {
      return c.json({ message: "User not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error deleting User", error }, 500);
  }
};
