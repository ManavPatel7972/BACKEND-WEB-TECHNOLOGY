import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_SECRET_EXPIRY,
    }
  );

  return accessToken;
};
