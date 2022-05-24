interface IUserToSave {
  email: string;
  name: string;
  password: string;
  age: number;
}
interface IUser {
  email: string;
  name: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
  id: string;
}

interface updatedUser {
  email?: string;
  name?: string;
  password?: string;
  age?: number;
  updated_at?: Date;
}

export { IUserToSave, updatedUser, IUser };
