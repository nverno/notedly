import { NoteTC } from '@models';
// import { Resolver, ResolverNextRpCb, ResolverResolveParams } from 'graphql-compose';

export const NoteQuery = {
  noteById: NoteTC.mongooseResolvers.findById(),
  noteByIds: NoteTC.mongooseResolvers.findByIds(),
  // ownerNotes: NoteTC.mongooseResolvers.findMany().wrapResolve(
  //   (next: ResolverNextRpCb<any,any,{authorId: string}>) =>
  //     (fp: ResolverResolveParams<any, any, { authorId: string }>) => {
  //     fp.args.authorId = fp.context.user?._id;
  //       return next(fp as unknown as Resolver<any,any,any>);
  //   }),
  // return just notes for current authenticated user
  notes: NoteTC.mongooseResolvers.findMany().wrapResolve((next) => (fp) => {
    fp.args.authorId = fp.context.user?._id;
    return next(fp);
  }),
  // add endpoint which returns all notes from all users
  allNotes: NoteTC.mongooseResolvers.findMany().wrapResolve((next) => (rp) => {
    // for regular user return null
    // if (!rp.context.isAdmin) return null;
    // for admin delegate execution to the basic resolver
    return next(rp);
  }),
};

export const NoteMutation = {
  createNote: NoteTC.mongooseResolvers.createOne(),
  deleteNote: NoteTC.mongooseResolvers.removeById(),
  updateNote: NoteTC.mongooseResolvers.updateById(),
};
