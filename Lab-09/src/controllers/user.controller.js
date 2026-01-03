import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.json({ message: "name,email,password is required field" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.json({ message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });

    res.json({ message: "User created Successfully", data: newUser });
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
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "user Not found ! please register first" });
    }

    const decodePassword = await bcrypt.compare(password, user.password);

    if (!decodePassword) {
      return res.json({ message: "Invalid Password" });
    }

    const accessToken = generateToken(user._id);

    return res.json({
      message: "User logged in successfully",
      token: accessToken,
    });
  } catch (error) {
    res.json(error);
  }
};

export const allUser = async (req, res) => {
  const users = await User.find();

  if (!users) {
    return res.json({ message: "Not any User found", data: [] });
  }

  return res.json({ message: "All users fetched Successfully.", data: users });
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, {
      $set: req.body,
    },{new: true});

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Updated Successfully", updatedUser });
  } catch (error) {
    res.json({ message: "Error when Updated User", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User delete Successfully", deletedUser });
  } catch (error) {
    res.json({ message: "Error when delete User", error });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).json({ message: "Id is required" });
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched Successfully", user });
  } catch (error) {
    res.json({ message: "Error when getUserById User", error });
  }
};

