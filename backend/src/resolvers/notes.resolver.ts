import 'reflect-metadata';
import { HttpException } from '@/exceptions';
import {
  //  Ctx,
  Root,
  FieldResolver,
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Note, NoteModel, User, UserModel } from '@models';
import { CreateNoteDto, UpdateNoteDto } from '@/dtos';
// import { Context } from '@/interfaces';

@Resolver((_of) => Note)
export class NotesResolver {
  @Query(() => [Note])
  async getNotes(): Promise<Note[]> {
    return await NoteModel.find({});
  }

  @Query(() => Note, { nullable: true })
  async getNoteById(@Arg('noteId') noteId: string): Promise<Note> {
    return await NoteModel.findById(noteId);
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('noteData') noteData: CreateNoteDto,
    // @Ctx() { user }: Context,
  ): Promise<Note> {
    const { author: authorId, ...data } = noteData;

    const author = await UserModel.findById(authorId);
    if (!author) throw new HttpException(400, 'author not found');

    const note = new NoteModel({
      ...data,
      author: author._id,
    });

    return await note.save({ timestamps: true });
  }

  @Mutation(() => Note)
  async updateNote(
    @Arg('noteId') noteId: string,
    @Arg('noteData') noteData: UpdateNoteDto,
  ): Promise<User> {
    return await NoteModel.findOneAndUpdate({ _id: noteId }, noteData, {
      new: true,
      timestamps: true,
    });
  }

  @FieldResolver()
  async author(@Root() note: Note): Promise<User> {
    return await UserModel.findById(note.author);
  }
}
