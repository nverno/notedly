import 'reflect-metadata';
import {
  Ctx,
  Root,
  FieldResolver,
  Arg,
  Mutation,
  Query,
  Resolver,
  Authorized,
} from 'type-graphql';
import { Note, NoteModel, User, UserModel } from '@models';
import { CreateNoteDto, UpdateNoteDto } from '@/dtos';
import { IContext } from '@/interfaces';
import { ForbiddenError } from 'apollo-server-express';

@Resolver((_of) => Note)
export class NotesResolver {
  @FieldResolver()
  async author(@Root() note: Note): Promise<User> {
    return await UserModel.findById(note.author);
  }

  @FieldResolver()
  async favoritedBy(@Root() note: Note): Promise<User[]> {
    return await UserModel.find({ _id: { $in: note.favoritedBy } });
  }

  @Query(() => [Note])
  async getNotes(): Promise<Note[]> {
    return await NoteModel.find({});
  }

  @Query(() => Note, { nullable: true })
  async getNoteById(@Arg('noteId') noteId: string): Promise<Note> {
    return await NoteModel.findById(noteId);
  }

  @Mutation(() => Note)
  @Authorized()
  async createNote(
    @Arg('noteData') noteData: CreateNoteDto,
    @Ctx() { user }: IContext,
  ): Promise<Note> {
    const note = new NoteModel({
      ...noteData,
      author: user._id,
    });

    return await note.save({ timestamps: true });
  }

  @Mutation(() => Note)
  @Authorized()
  async updateNote(
    @Arg('noteId') noteId: string,
    @Arg('noteData') noteData: UpdateNoteDto,
    @Ctx() { user }: IContext,
  ): Promise<Note> {
    const note = await NoteModel.findById(noteId);

    if (note && String(note.author) !== String(user._id))
      throw new ForbiddenError("You don't have permissions to delete note");

    return await NoteModel.findOneAndUpdate(
      {
        _id: noteId,
      },
      {
        $set: {
          content: noteData.content,
        },
      },
      {
        new: true,
        timestamps: true,
      },
    );
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteNote(
    @Arg('noteId') noteId: string,
    @Ctx() { user }: IContext,
  ): Promise<boolean> {
    const note = await NoteModel.findById(noteId);
    if (note && String(note.author) !== String(user._id))
      throw new ForbiddenError("You don't have permissions to delete note");

    try {
      await note.remove();
      return true;
    } catch (err) {
      return false;
    }
  }
}
