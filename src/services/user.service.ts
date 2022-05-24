import { hash } from "bcrypt";
import dotenv from "dotenv";
import { User } from "../entities/user.entities";
import userRepository from "../repositories/user.repositories";
dotenv.config();
import { updatedUser } from "../interfaces/user.interface";

class UserService {
  createUserService = async (body: User) => {
    body.password = await hash(body.password, 10);
    const user = await userRepository.save(body);
    return { body: user, statusCode: 201 };
  };

  getAllUsersService = async () => {
    const users = await userRepository.getAll();

    return { body: users, statusCode: 200 };
  };

  getUserByIdService = async (id: string) => {
    const user = await userRepository.retrieve(id);
    return { body: user, statusCode: 200 };
  };

  editUserService = async (user: updatedUser, id: string) => {
    const updateUser = await userRepository.update(id, { ...user });

    return updateUser;
  };

  deleteUserService = async (id: string) => {
    const deletedUser = await userRepository.delete(id);
    return deletedUser;
  };
}

export default new UserService();
