// import { CreateNoteDto } from '@/dtos';
// import { Note } from '@/typedefs';
// import { Arg, Mutation, Query, Resolver } from 'type-graphql';
// import { notes } from '../tests';

// @Resolver()
// export class notesResolver {
//   @Query(() => [Note], {
//     description: 'List of notes',
//   })
//   async getNotes(): Promise<Note[]> {
//     return notes;
//   }

//   @Query(() => Note, {
//     description: 'Get note by Id',
//     nullable: true,
//   })
//   async getNoteById(@Arg('noteId') noteId: string): Promise<Note> {
//     return notes.find((note) => note.id === noteId);
//   }

//   @Mutation(() => Note, {
//     description: 'Create note',
//   })
//   async createNote(@Arg('noteData') noteData: CreateNoteDto): Promise<Note> {
//     const note = {
//       ...noteData,
//       id: String(notes.length + 1),
//     };
//     notes.push(note);
//     return note;
//   }
// }
