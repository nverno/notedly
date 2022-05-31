// import { HttpException } from '@/exceptions';
import { schemaComposer } from 'graphql-compose';
import { NoteQuery, NoteMutation } from './notes.schema';
import { UserQuery, UserMutation } from './users.schema';

// usage: addFields({ publicFields, ...authorAccess({ ...NoteQuery }) })
// const authorAccess = (resolvers) => {
//   Object.keys(resolvers).forEach(k => {
//     resolvers[k].wrapResolve(next => rp => {
//       if (!rp.context.user._id === ???) {
//         throw new HttpException(401, 'not authorized');
//       }
//       return next(rp);
//     });
//   });
//   return resolvers;
// }

// Add CRUD operations
schemaComposer.Query.addFields({
  ...NoteQuery,
  ...UserQuery,
});

schemaComposer.Mutation.addFields({
  ...NoteMutation,
  ...UserMutation,
});

export const schema = schemaComposer.buildSchema();
