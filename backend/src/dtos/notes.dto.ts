import { IsString } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';
import { Note } from '@entities';

@InputType()
export class CreateNoteDto implements Partial<Note> {
  @Field((type) => ID)
  @IsString()
  authorId: string;

  @Field()
  @IsString()
  content: string;
}
