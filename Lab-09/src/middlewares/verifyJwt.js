import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const verifyJwt = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "Token messing" });
  }
  
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
  const user = await User.findById(decodedToken.id);

  if (!user) {
    return res.json({ message: "Invalid Token" });
  }

  req.user = user;
  next();
};
