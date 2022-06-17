import { getModelForClass } from '@typegoose/typegoose';
import { User } from './users.model';
import { Note } from './notes.model';

export * from './users.model';
export * from './notes.model';
export const UserModel = getModelForClass(User);
export const NoteModel = getModelForClass(Note);

export const models = {
  User: UserModel,
  Note: NoteModel,
};
