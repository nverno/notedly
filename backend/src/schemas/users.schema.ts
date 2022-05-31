import {
  userCreateOneResolver,
  userFindManyResolver,
  userFindOneResolver,
  userRemoveOneResolver,
  userUpdateByIdResolver,
} from '@models';

export const UserQuery = {
  findUser: userFindOneResolver,
  findUsers: userFindManyResolver,
};

export const UserMutation = {
  // signUp: {
  //   type: String,
  //   args:
  // },
  // UserTC.mongooseResolvers.createOne(),
  // signIn: {
  //   type: String,
  // },
  createUser: userCreateOneResolver,
  deleteUser: userRemoveOneResolver,
  updateUser: userUpdateByIdResolver,
};
