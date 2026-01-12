import { Author } from "../models/author.model.js";

export const createAuthor = async (req, res) => {
  try {
    const { name, bio, country } = req.body;

    const author = await Author.create({
      name,
      bio,
      country,
    });

    res.status(201).json({
      message: "Author created successfully",
      author,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res
      .status(200)
      .json({ message: "getAllAuthors fetched successfully", authors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res
      .status(200)
      .json({ message: "getAuthorById fetched successfully", author });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({
      message: "Author updated successfully",
      author,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByIdAndDelete(id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({
      message: "Author deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
