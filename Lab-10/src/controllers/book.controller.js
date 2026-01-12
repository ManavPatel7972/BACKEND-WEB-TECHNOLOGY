import { Book } from "../models/book.model.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, category, totalCopies } = req.body;

    if (!title || !author || !category || !totalCopies) {
      return res.status(
        401,
        "title, author, category, totalCopies are required field"
      );
    }
    const book = await Book.create({
      title,
      author,
      category,
      totalCopies,
      availableCopies: totalCopies,
    });

    res.status(201).json({
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ isActive: true }).populate({
      path: "author",
      name: 1,
      country: 1,
    });

    res
      .status(200)
      .json({ message: "GetAll Books fetched  successfully", books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ message: "Book Id is required !" });
    }

    const book = await Book.findById(id).populate({
      path: "author",
      name: 1,
      country: 1,
    });

    if (!book || !book.isActive) {
      return res.status(404).json({ message: "Book not found" });
    }

    res
      .status(200)
      .json({ message: "GetBookById fetched  successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const books = await Book.find({
      category: category,
      isActive: true,
    }).populate({
      path: "author",
      name: 1,
      country: 1,
    });

    res
      .status(200)
      .json({ message: "GetBookByCategory fetched  successfully", books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book || !book.isActive) {
      return res.status(404).json({ message: "Book not found" });
    }

    // If totalCopies is updated, adjust availableCopies safely
    if (req.body.totalCopies !== undefined) {
      const diff = req.body.totalCopies - book.totalCopies;
      book.availableCopies += diff;
      book.totalCopies = req.body.totalCopies;
    }

    if (req.body.title) book.title = req.body.title;
    if (req.body.author) book.author = req.body.author;
    if (req.body.category) book.category = req.body.category;

    await book.save();

    res.status(200).json({
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.isActive = false;
    await book.save();

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
