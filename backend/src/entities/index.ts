import { getModelForClass } from '@typegoose/typegoose';
import { User } from './users.entity';
import { Note } from './notes.entity';

export * from './users.entity';
export * from './notes.entity';
export const UserModel = getModelForClass(User);
export const NoteModel = getModelForClass(Note);
