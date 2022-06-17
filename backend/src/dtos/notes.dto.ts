import { IsOptional, IsString } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';
import { Note } from '@models';

@InputType()
export class CreateNoteDto implements Partial<Omit<Note, 'author'>> {
  @Field((type) => ID) // eslint-disable-line
  @IsString()
  author: string;

  @Field()
  @IsString()
  content: string;
}

@InputType()
export class UpdateNoteDto implements Partial<Omit<Note, 'author'>> {
  @Field()
  @IsOptional()
  @IsString()
  content?: string;
}
