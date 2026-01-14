import { Issue } from "../models/issue.model.js";
import { Book } from "../models/book.model.js";

export const issueBook = async (req, res) => {
  try {
    const { bookId, dueDate } = req.body;
    const userId = req.user.id; //! from JWT (verifyJwt atteched req.user = user)

    const book = await Book.findById(bookId);
    if (!book || !book.isActive) {
      return res.status(404).json({ message: "Book not available" });
    }

    if (book.availableCopies <= 0) {
      return res.status(400).json({ message: "No copies available" });
    }

    // same book not further issueing
    const alreadyIssued = await Issue.findOne({
      user: userId,
      book: bookId,
      status: "ISSUED",
    });

    if (alreadyIssued) {
      return res.status(400).json({
        message: "Book already issued to this user",
      });
    }

    // create issue book which user issue and which book
    const issue = await Issue.create({
      user: userId,
      book: bookId,
      dueDate,
    });

    // Reduce available copies
    book.availableCopies -= 1;
    await book.save();

    res.status(201).json({
      message: "Book issued successfully",
      issue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const returnBook = async (req, res) => {
  try {
    const { issueId } = req.params;

    const issue = await Issue.findById(issueId).populate("book");

    if (!issue) {
      return res.status(404).json({ message: "Issue record not found" });
    }

    if (issue.status === "RETURNED") {
      return res.status(400).json({ message: "Book already returned" });
    }

    // Calculate fine (5 rupees per day late)
    const today = new Date();
    let fine = 0;

    if (today > issue.dueDate) {
      const diffDays = today.getDay() - issue.dueDate.getDay();

      fine = diffDays * 5;
    }

    // updated and save new data of issued book
    issue.status = "RETURNED";
    issue.returnDate = today;
    issue.fineAmount = fine;
    await issue.save();

    // Increase available book copies
    issue.book.availableCopies += 1;
    await issue.book.save();

    res.status(200).json({
      message: "Book returned successfully",
      fineAmount: fine,
      issue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllIssuedBooks = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("user", "name email")
      .populate("book", "title category");

    res
      .status(200)
      .json({ message: "getAllIssuedBooks fetched successfully", issues });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIssuedBooksByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const issues = await Issue.find({
      user: userId,
    })
      .populate("book", "title category")
      .sort({ createdAt: -1 });

    res
      .status(200)
      .json({ message: "getIssuedBooksByUser fetched successfully", issues });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIssuedBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findById(id)
      .populate("user", "name email")
      .populate("book", "title category");

    if (!issue) {
      return res.status(404).json({ message: "Issue record not found" });
    }

    res
      .status(200)
      .json({ message: "getIssuedBookById fetched successfully", issue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
