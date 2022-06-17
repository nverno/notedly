import { ObjectId } from 'mongodb';

type UserRoles = 'ADMIN' | 'USER' | 'MODERATOR';

export interface IUser {
  _id: ObjectId;
  username: string;
  roles: UserRoles[];
}
