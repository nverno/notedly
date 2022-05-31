import { composeMongoose } from 'graphql-compose-mongoose';
import { model, Schema, Document } from 'mongoose';
import { IUser } from '@interfaces';
import { noteFindManyResolver } from './notes.model';

export const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const User = model<IUser & Document>('User', UserSchema);

// Convert mongoose model to GraphQL pieces
const customOptions = {};
export const UserTC = composeMongoose(User, customOptions);

UserTC.addRelation('notes', {
  resolver: () => noteFindManyResolver,
  prepareArgs: {
    filter: (source) => ({ authorId: source._id }),
  },
  projection: { authorId: true },
});

export const userFindOneResolver = UserTC.mongooseResolvers.findOne();
export const userFindManyResolver = UserTC.mongooseResolvers.findMany();

export const userCreateOneResolver = UserTC.mongooseResolvers.createOne();
export const userUpdateByIdResolver = UserTC.mongooseResolvers.updateById();
export const userRemoveOneResolver = UserTC.mongooseResolvers.removeOne();
