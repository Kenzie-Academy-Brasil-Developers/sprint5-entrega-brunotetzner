import { Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/user.repositories";

const validateUserExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const users = await UserRepository.getAll();
  const user = users.find((user) => user.uuid === id);

  if (!user) {
    return response.status(404).json({ error: "User not found" });
  }
  next();
};

export { validateUserExistsMiddleware };
