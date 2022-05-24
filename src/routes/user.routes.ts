import { Router } from "express";

const routes = Router();

import UserController from "../controllers/users/user.controller";
import {
  userCreateSchema,
  validateUserMiddleware,
} from "../middlewares/validateUser.middleware";

import { validateEmailMiddleware } from "../middlewares/validateEmail.middlware";
import { validateUserExistsMiddleware } from "../middlewares/validateUserExists.middleware";
routes.post(
  "/users",
  validateUserMiddleware(userCreateSchema),
  validateEmailMiddleware,
  UserController.createUserController
);
routes.get("/users", UserController.getallUsersController);
routes.get(
  "/users/:id",
  validateUserExistsMiddleware,
  UserController.getOneUserController
);
routes.patch(
  "/users/:id",
  validateUserExistsMiddleware,
  validateEmailMiddleware,
  UserController.editUserController
);
routes.delete(
  "/users/:id",
  validateUserExistsMiddleware,
  UserController.deleteUserController
);

export default routes;
