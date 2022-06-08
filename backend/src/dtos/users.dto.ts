import { IsEmail, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { User } from '@entities';

@InputType()
export class CreateUserDto implements Partial<User> {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}
