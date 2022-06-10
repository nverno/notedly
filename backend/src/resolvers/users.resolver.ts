import { Root, Arg, Mutation, Query, Resolver, FieldResolver } from 'type-graphql';
import { CreateUserDto, UpdateUserDto } from '@dtos';
import { Note, NoteModel, User, UserModel } from '@entities';

@Resolver((of) => User)
export class UserResolver {
  @FieldResolver()
  async notes(@Root() user: User): Promise<Note[]> {
    return await NoteModel.find({ author: user._id });
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await UserModel.find({});
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Arg('userId') userId: string): Promise<User> {
    return await UserModel.findById(userId);
  }

  @Mutation(() => User)
  async createUser(@Arg('userData') userData: CreateUserDto): Promise<User> {
    const user = new UserModel(userData);
    await user.save();
    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('userId') userId: string,
    @Arg('userData') userData: UpdateUserDto,
  ): Promise<User> {
    return await UserModel.findOneAndUpdate({ _id: userId }, userData, {
      new: true,
    });
  }

  @Mutation(() => User)
  async deleteUser(@Arg('userId') userId: string): Promise<User> {
    return await UserModel.findOneAndDelete({ _id: userId });
  }
}

export default UserResolver;
