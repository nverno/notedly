import { Root, Arg, Mutation, Query, Resolver, FieldResolver } from 'type-graphql';
import { CreateUserDto } from '@dtos';
import { Note, NoteModel, User, UserModel } from '@entities';
import { ObjectId } from 'mongodb';

@Resolver((of) => User)
export class UserResolver {
  // extends UserRepository {

  @FieldResolver()
  async notes(@Root() user: User): Promise<Note[]> {
    return await NoteModel.findById(user._id);
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await UserModel.find({});
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Arg('userId') userId: number): Promise<User> {
    return await UserModel.findById(userId);
  }

  @Mutation(() => User)
  async createUser(@Arg('userData') userData: CreateUserDto): Promise<User> {
    return await UserModel.create(userData);
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('userId') userId: ObjectId,
    @Arg('userData') userData: CreateUserDto,
  ): Promise<User> {
    return await UserModel.findOneAndUpdate({ _id: userId }, userData);
  }

  @Mutation(() => User)
  async deleteUser(@Arg('userId') userId: number): Promise<User> {
    return await UserModel.findOneAndDelete({ _id: userId });
  }
}

export default UserResolver;
