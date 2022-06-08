import { ObjectId } from 'mongodb';

export * from './auth.interface';
export * from './users.interface';
export * from './notes.interface';
export * from './context.interface';

export type Ref<T> = T | ObjectId;
