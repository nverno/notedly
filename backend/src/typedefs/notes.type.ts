import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Note {
  @Field((type) => ID) // eslint-disable-line
  id: string;

  @Field()
  content: string;

  @Field()
  author: string;
}
