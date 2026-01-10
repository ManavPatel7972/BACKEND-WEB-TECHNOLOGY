import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
    },

    country: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema);
