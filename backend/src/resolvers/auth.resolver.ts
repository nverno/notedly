import { Authorized, Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { CreateUserDto } from '@dtos';
// import { AuthRepository } from '@repositories';
import { User, UserModel } from '@entities';

@Resolver()
export class authResolver {
  // extends AuthRepository {
  @Mutation(() => User, {
    description: 'User signup',
  })
  async signup(@Arg('userData') userData: CreateUserDto): Promise<User> {
    return await UserModel.create(userData);
  }

  // @Mutation(() => User, {
  //   description: 'User login',
  // })
  // async login(@Arg('userData') userData: CreateUserDto): Promise<User> {
  //   return await UserModel.userLogIn(userData);
  // }

  @Authorized()
  @Mutation(() => User, {
    description: 'User logout',
  })
  async logout(@Ctx('user') userData: any): Promise<User> {
    // const user = await this.userLogOut(userData);
    return await UserModel.findOne(userData);
  }
}
