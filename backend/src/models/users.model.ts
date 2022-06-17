import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { Note } from './notes.model';
import { prop as Property } from '@typegoose/typegoose';
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
  @Property({ type: () => Note, default: [] })
  public notes?: Note[];

  @Property({ required: true })
  public password: string;

  @Field((_type) => Date, { nullable: true })
  @Property()
  public updatedAt: Date;

  @Field((_type) => Date, { nullable: true })
  @Property()
  public createdAt: Date;
}
