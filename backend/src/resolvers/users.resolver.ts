// import { Arg, Mutation, Query, Resolver } from 'type-graphql';
// import { CreateUserDto } from '@dtos';
// import { UserRepository } from '@repositories';
// import { User } from '@typedefs';

// @Resolver()
// export class userResolver extends UserRepository {
//   @Query(() => [User], {
//     description: 'User find list',
//   })
//   async getUsers(): Promise<User[]> {
//     const users: User[] = await this.userFindAll();
//     return users;
//   }

//   @Query(() => User, {
//     description: 'User find by id',
//   })
//   async getUserById(@Arg('userId') userId: number): Promise<User> {
//     const user: User = await this.userFindById(userId);
//     return user;
//   }

//   @Mutation(() => User, {
//     description: 'User create',
//   })
//   async createUser(@Arg('userData') userData: CreateUserDto): Promise<User> {
//     const user: User = await this.userCreate(userData);
//     return user;
//   }

//   @Mutation(() => User, {
//     description: 'User update',
//   })
//   async updateUser(
//     @Arg('userId') userId: number,
//     @Arg('userData') userData: CreateUserDto,
//   ): Promise<User> {
//     const user: User = await this.userUpdate(userId, userData);
//     return user;
//   }

//   @Mutation(() => User, {
//     description: 'User delete',
//   })
//   async deleteUser(@Arg('userId') userId: number): Promise<User> {
//     const user: User = await this.userDelete(userId);
//     return user;
//   }
// }
