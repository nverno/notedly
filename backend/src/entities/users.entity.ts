import { ObjectId } from 'mongodb';
import { Field, ObjectType, ID } from 'type-graphql';
import { Note } from './notes.entity';
import { prop, getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class User {
  @Field((type) => ID) // eslint-disable-line
  readonly _id: ObjectId;

  @Field()
  @prop({ required: true })
  username: string;

  @Field()
  @prop({ required: true })
  email: string;

  @Field({ nullable: true })
  @prop()
  avatar?: string;

  @Field((type) => [Note]) // eslint-disable-line
  @prop({ type: () => Note, default: [] })
  notes: Note[];

  @prop({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User);
