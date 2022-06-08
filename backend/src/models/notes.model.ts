// import { model, Schema, Document } from 'mongoose';
// import { INote } from '@interfaces';
// import { composeMongoose } from 'graphql-compose-mongoose';
// import { userFindOneResolver } from './users.model';

// export const NoteSchema: Schema = new Schema(
//   {
//     content: {
//       type: String,
//       required: true,
//     },
//     authorId: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// export const Note = model<INote & Document>('Note', NoteSchema);

// // Convert mongoose model to GraphQL pieces
// const customOptions = {};
// export const NoteTC = composeMongoose(Note, customOptions);

// NoteTC.addRelation('author', {
//   resolver: () => userFindOneResolver,
//   prepareArgs: {
//     filter: (source) => ({ _id: source.authorId }),
//     skip: null,
//     sort: null,
//   },
//   projection: { authorId: true },
// });

// export const noteFindManyResolver = NoteTC.mongooseResolvers.findMany();
