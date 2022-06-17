import 'reflect-metadata';
import { prop as Property, Ref } from '@typegoose/typegoose';
import { ID, Field, ObjectType, Int } from 'type-graphql';
import { User } from './users.model';
import { ObjectId } from 'mongodb';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

@ObjectType()
export class Note extends TimeStamps {
  @Field((_type) => ID)
  public readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  public content: string;

  @Field((_type) => User)
  @Property({ ref: 'User', required: true })
  public author: Ref<User>;

  @Field(() => Int)
  @Property({ default: 0 })
  public favoriteCount: number;

  @Field(() => [User])
  @Property({ ref: () => User, default: [] })
  public favoritedBy: Ref<User>[];

  @Field((_type) => Date, { nullable: true })
  @Property()
  public updatedAt: Date;

  @Field((_type) => Date, { nullable: true })
  @Property()
  public createdAt: Date;
}

@ObjectType()
export class NoteFeed {
  @Field((_type) => [Note])
  @Property({ ref: () => Note, default: [] })
  public notes: Ref<Note>[];

  @Field({ nullable: true })
  @Property({ required: false })
  public cursor?: string;

  @Field(() => Boolean)
  @Property({ required: false })
  public hasNextPage: boolean;
}
