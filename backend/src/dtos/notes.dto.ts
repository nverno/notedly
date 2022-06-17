import { IsInt, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { Note } from '@models';

@InputType()
export class CreateNoteDto implements Partial<Omit<Note, 'author'>> {
  @Field()
  @IsString()
  content: string;
}

@InputType()
export class UpdateNoteDto implements Partial<Omit<Note, 'author'>> {
  @Field()
  @IsString()
  content: string;
}

@InputType()
export class NoteFeedDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  public cursor?: string;

  @Field({ nullable: true })
  @IsInt()
  @IsOptional()
  public limit?: number;
}
