import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserToSave } from "../interfaces/user.interface";

export const userCreateSchema: SchemaOf<IUserToSave> = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
});

export const validateUserMiddleware =
  (schema: SchemaOf<IUserToSave>) =>
  async (request: any, response: Response, next: NextFunction) => {
    try {
      const data = request.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        request.newUser = validatedData;
        next();
      } catch (err: any) {
        return response.status(400).json({ error: err.errors?.join(", ") });
      }
    } catch (err) {
      next(err);
    }
  };
