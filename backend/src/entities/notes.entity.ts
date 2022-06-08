import { prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './users.entity';
import { Ref } from '@interfaces';

@ObjectType()
export class Note {
  @Field((type) => ID) // eslint-disable-line
  readonly _id: string;

  @Field()
  @prop({ required: true })
  content: string;

  @Field((type) => ID) // eslint-disable-line
  @prop({ ref: User, required: true })
  author: Ref<User>;

  @Field((type) => Date)
  @prop()
  updatedAt: Date;

  @Field((type) => Date)
  @prop()
  createdAt: Date;
}

export const NoteModel = getModelForClass(Note);
