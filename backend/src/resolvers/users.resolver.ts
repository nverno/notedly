import {
  Ctx,
  Authorized,
  Root,
  Arg,
  Mutation,
  Query,
  Resolver,
  FieldResolver,
} from 'type-graphql';
import { CreateUserDto, UpdateUserDto } from '@dtos';
import { Note, NoteModel, User, UserModel } from '@models';
import { ForbiddenError } from 'apollo-server-express';
import { IContext } from '@/interfaces';
import mongoose from 'mongoose';

@Resolver((_of) => User)
export class UserResolver {
  @FieldResolver()
  async notes(@Root() user: User): Promise<Note[]> {
    return await NoteModel.find({ author: user._id }).sort({ _id: -1 });
  }

  @FieldResolver()
  async favorites(@Root() user: User): Promise<Note[]> {
    return await NoteModel.find({
      favoritedBy: user._id,
    }).sort({ _id: -1 });
  }

  @Query(() => [User])
  // @Authorized('ADMIN')
  async getUsers(): Promise<User[]> {
    return await UserModel.find({});
  }

  @Query(() => User)
  @Authorized()
  async currentUser(@Ctx() { user }: IContext): Promise<User> {
    return await UserModel.findById(user._id);
  }

  @Mutation(() => Note)
  @Authorized()
  async toggleFavorite(
    @Arg('noteId') noteId: string,
    @Ctx() { user }: IContext,
  ): Promise<Note> {
    const note = await NoteModel.findById(noteId);
    const hasUser =
      note.favoritedBy.indexOf(new mongoose.Types.ObjectId(user._id)) !== -1;

    return await NoteModel.findByIdAndUpdate(
      noteId,
      {
        [hasUser ? '$pull' : '$push']: {
          favoritedBy: new mongoose.Types.ObjectId(user._id),
        },
        $inc: {
          favoriteCount: hasUser ? -1 : 1,
        },
      },
      {
        new: true,
      },
    );
  }

  @Query(() => User)
  async getUser(
    @Arg('username') username: string,
    // @Ctx() { user }: IContext
  ): Promise<User> {
    return await UserModel.findOne({ username });
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Arg('userId') userId: string): Promise<User> {
    return await UserModel.findById(userId);
  }

  @Mutation(() => User)
  async createUser(@Arg('userData') userData: CreateUserDto): Promise<User> {
    const user = new UserModel(userData);
    await user.save({ timestamps: true });
    return user;
  }

  @Mutation(() => User)
  @Authorized()
  async updateUser(
    @Arg('userId') userId: string,
    @Arg('userData') userData: UpdateUserDto,
    @Ctx() { user }: IContext,
  ): Promise<User> {
    if (String(user._id) !== userId)
      throw new ForbiddenError('You dont have permissions to update user');

    return await UserModel.findOneAndUpdate({ _id: userId }, userData, {
      new: true,
      timestamps: true,
    });
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteUser(
    @Arg('userId') userId: string,
    @Ctx() { user }: IContext,
  ): Promise<boolean> {
    if (String(user._id) !== userId)
      throw new ForbiddenError('You dont have permissions to delete user');

    const res = await UserModel.findOneAndDelete({ _id: userId });
    return !!res;
  }
}

export default UserResolver;
