import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { Note } from './notes.entity';
import { prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class User {
  @Field((type) => ID) // eslint-disable-line
  // @Property()
  public readonly _id: ObjectId;

  @Field()
  @Property({ required: true, unique: true })
  public username: string;

  @Field({ nullable: true })
  @Property()
  public avatar?: string;

  @Field((type) => [Note]) // eslint-disable-line
  @Property({ type: () => Note, default: [] })
  public notes?: Note[];

  @Property({ required: true })
  public password: string;
}
