import { Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/user.repositories";

const validateEmailMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email } = request.body;
  if (!email) {
    return next();
  }

  const oldUser = await UserRepository.getByEmail(email);
  if (oldUser) {
    return response.status(409).json({ error: "Email already exists" });
  }

  next();
};

export { validateEmailMiddleware };
