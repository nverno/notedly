import { IsString } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { Note } from '@typedefs';

@InputType()
export class CreateNoteDto implements Partial<Note> {
  @Field()
  @IsString()
  author: string;

  @Field()
  @IsString()
  content: string;
}
