import bcrypt from 'bcrypt';
import { Authorized, Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { User, UserModel } from '@models';
import { gravatar } from '@utils';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import {
  AuthenticationError,
  // ForbiddenError
} from 'apollo-server-express';

@Resolver((_of) => User)
export class AuthResolver {
  @Mutation(() => String, {
    description: 'User signup',
  })
  async signUp(@Arg('userData') userData: CreateUserDto): Promise<string> {
    let { username, password, avatar } = userData;
    username = username.trim().toLowerCase();

    const hashed = await bcrypt.hash(password, 10);
    if (!avatar) avatar = gravatar(username);

    try {
      const user = await UserModel.create({
        username,
        avatar,
        password: hashed,
        timestamps: true,
      });

      return jwt.sign({ id: user._id }, SECRET_KEY);
    } catch (err) {
      console.log(err);
      throw new Error('Error creating account');
    }
  }

  @Mutation(() => String, {
    description: 'User login',
  })
  async login(@Arg('userData') userData: LoginUserDto): Promise<string> {
    let { username, password } = userData;
    if (username) username = username.trim().toLowerCase();

    const user = await UserModel.findOne({ username });
    if (!user) throw new AuthenticationError('Invalid login credentials');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new AuthenticationError('Invalid login credentials');

    return jwt.sign({ id: user._id }, SECRET_KEY);
  }

  @Authorized()
  @Mutation(() => User, {
    description: 'User logout',
  })
  async logout(@Ctx('user') userData: any): Promise<User> {
    // const user = await this.userLogOut(userData);
    return await UserModel.findOne(userData);
  }
}
