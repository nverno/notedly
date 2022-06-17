import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { Note } from './notes.model';
import { prop as Property, Ref } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

@ObjectType()
export class User extends TimeStamps {
  @Field((_type) => ID)
  public readonly _id: ObjectId;

  @Field()
  @Property({ required: true, unique: true })
  public username: string;

  @Field({ nullable: true })
  @Property()
  public avatar?: string;

  @Field((_type) => [Note])
  @Property({ ref: () => Note, default: [] })
  public notes?: Ref<Note>[];

  @Field((_type) => [Note])
  @Property({ ref: () => Note, default: [] })
  public favorites?: Ref<Note>[];

  @Property({ required: true })
  public password: string;

  @Field(() => [String])
  @Property({ type: () => [String], default: [] })
  public roles?: string[];

  @Field((_type) => Date, { nullable: true })
  @Property()
  public updatedAt: Date;

  @Field((_type) => Date, { nullable: true })
  @Property()
  public createdAt: Date;
}
