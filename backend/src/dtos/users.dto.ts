import { IsOptional, IsString } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { User } from '@entities';

@InputType()
export class CreateUserDto implements Partial<User> {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}

@InputType()
export class UpdateUserDto implements Partial<Omit<CreateUserDto, 'password'>> {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field()
  @IsOptional()
  @IsString()
  username?: string;
}
