import { CreateNoteDto } from '@/dtos';
import { Context } from '@/interfaces';
import { Note, NoteModel, User, UserModel } from '@entities';
import {
  Ctx,
  Root,
  FieldResolver,
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';

@Resolver((of) => Note)
export class NotesResolver {
  @FieldResolver()
  async author(@Root() note: Note): Promise<User> {
    return await UserModel.findById(note.author);
  }

  @Query(() => [Note])
  async getNotes(): Promise<Note[]> {
    return await NoteModel.find({});
  }

  @Query(() => Note, { nullable: true })
  async getNoteById(@Arg('noteId') noteId: string): Promise<Note> {
    // return notes.find((note) => note.id === noteId);
    return await NoteModel.findById(noteId);
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('noteData') noteData: CreateNoteDto,
    @Ctx() { user }: Context,
  ): Promise<Note> {
    const note = new NoteModel({
      ...noteData,
      author: user._id,
    });

    await note.save();
    return note;
  }
}
