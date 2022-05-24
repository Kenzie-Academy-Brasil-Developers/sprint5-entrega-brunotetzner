import { Request, Response } from "express";
import UserService from "../../services/user.service";
import { User } from "../../entities/user.entities";
import userService from "../../services/user.service";
import { updatedUser } from "../../interfaces/user.interface";

class UserController {
  createUserController = async (request: Request, response: Response) => {
    const userToSave: User = request.body;
    userToSave.created_at = new Date();
    userToSave.updated_at = new Date();

    const { body, statusCode } = await UserService.createUserService(
      userToSave
    );
    return response.status(statusCode).json(body);
  };

  getallUsersController = async (request: Request, response: Response) => {
    const { body, statusCode } = await UserService.getAllUsersService();
    return response.status(statusCode).send(body);
  };

  getOneUserController = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { body, statusCode } = await UserService.getUserByIdService(id);

    return response.status(statusCode).send(body);
  };

  editUserController = async (request: Request, response: Response) => {
    request.body.updated_at = new Date();
    const user: updatedUser = request.body;
    const { id } = request.params;
    const updatedUser = await userService.editUserService(user, id);

    return response.status(200).json(updatedUser);
  };

  deleteUserController = async (request: Request, response: Response) => {
    const { id } = request.params;
    const deletedUser = await userService.deleteUserService(id);
    return response.status(200).json(deletedUser);
  };
}
export default new UserController();
