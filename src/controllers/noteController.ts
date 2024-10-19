import { Context } from "hono";
import Note from "../models/Note";

export const createNote = async (c: Context) => {
  try {
    const { text, color, mail } = await c.req.json();

    const newNote = new Note({ text, mail, color });
    const savedNote = await newNote.save();

    return c.json(savedNote, 201);
  } catch (error) {
    return c.json({ message: "Error creating note", error }, 500);
  }
};

export const getNotesByMail = async (c: Context) => {
  try {
    const { mail } = c.req.param();

    const notes = await Note.find({ mail });

    if (notes.length === 0) {
      return c.json({ message: "No notes found for this email." }, 404);
    }

    return c.json(notes, 200);
  } catch (error) {
    return c.json({ message: "Server error", error }, 500);
  }
};

export const updateNote = async (c: Context) => {
  try {
    const { text, color } = await c.req.json();
    const { id } = c.req.param();

    const note = await Note.findByIdAndUpdate(
      id,
      { text, color },
      { new: true }
    );

    if (note) {
      return c.json(note, 200);
    } else {
      return c.json({ message: "Note not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error updating note", error }, 500);
  }
};

export const deleteNote = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const note = await Note.findByIdAndDelete(id);
    if (note) {
      return c.json({ message: "Note deleted successfully" }, 200);
    } else {
      return c.json({ message: "Note not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Error deleting note", error }, 500);
  }
};
