import 'reflect-metadata';
import { prop as Property, Ref } from '@typegoose/typegoose';
import { ID, Field, ObjectType } from 'type-graphql';
import { User } from './users.entity';
import { ObjectId } from 'mongodb';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

@ObjectType()
export class Note extends TimeStamps {
  @Field(() => ID)
  public readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  public content: string;

  @Field(() => User) // eslint-disable-line
  @Property({ ref: 'User', required: true })
  public author: Ref<User>;

  @Field(() => Date, { nullable: true })
  @Property()
  public updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @Property()
  public createdAt: Date;
}
