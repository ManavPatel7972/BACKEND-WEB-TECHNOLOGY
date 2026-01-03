import { Faculty } from "../model/faculty.model.js";
import { User } from "../model/user.model.js";
import { generateToken } from "../services/generateToken.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.json({ message: "name,email,password is required field" });
    }

    const user = await Faculty.findOne({ email });

    if (user) {
      return res.json({ message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const newUser = await Faculty.create({
      name,
      email,
      password: hashPassword,
      phone,
    });

    res.json({ message: "faculty created Successfully", data: newUser });
  } catch (err) {
    res.json({ message: "Err when Register!", err: err });
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "email,password is required field" });
  }

  try {
    const user = await Faculty.findOne({ email });

    if (!user) {
      return res.json({ message: "faculty Not found ! please register first" });
    }

    const decodePassword = await bcrypt.compare(password, user.password);

    if (!decodePassword) {
      return res.json({ message: "Invalid Password" });
    }

    const accessToken = generateToken(user._id);

    return res.json({
      message: "faculty logged in successfully",
      token: accessToken,
    });
  } catch (error) {
    res.json(error);
  }
};

export const allFaculty = async (req, res) => {
  const users = await Faculty.find();

  if (!users) {
    return res.json({ message: "Not any Faculty found", data: [] });
  }

  return res.json({ message: "All users fetched Successfully.", data: users });
};

export const updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const updatedUser = await Faculty.findByIdAndUpdate(id, {
      $set: req.body,
    });

    if (!updatedUser) {
      res.status(404).json({ message: "Faculty not found" });
    }
    res.status(200).json({ message: "Faculty Updated Successfully", updateUser });
  } catch (error) {
    res.json({ message: "Error when Updated Faculty", error });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const deletedUser = await Faculty.findByIdAndDelete(id);

    if (!deletedUser) {
      res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json({ message: "Faculty delete Successfully", deletedUser });
  } catch (error) {
    res.json({ message: "Error when delete Faculty", error });
  }
};

export const getFacultyById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const user = await Faculty.findOne({ _id: id });

    if (!user) {
      res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json({ message: "Faculty fetched Successfully", user });
  } catch (error) {
    res.json({ message: "Error when getFacultyById Faculty", error });
  }
};
