import { Note } from './Note';

export interface User {
  _id: string;
  username: string;
  avatar?: string;
  favorites: Partial<Note>[];
  notes: Partial<Note>[];
}

export interface CreateUserDto {
  username: string;
  password: string;
}
