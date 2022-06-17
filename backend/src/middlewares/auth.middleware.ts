import { verify } from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions';
import { DataStoredInToken, IContext } from '@interfaces';
import { UserModel } from '@models';
import { convertDocument } from '.';

export const authMiddleware = async (req) => {
  try {
    const Authorization =
      req.cookies['Authorization'] ||
      (req.header('Authorization')
        ? req.header('Authorization').split('Bearer ')[1]
        : null);
    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const resp = (await verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = resp.id;
      const user = await UserModel.findById(userId);
      if (!user) return null;
      // if (!user) throw new HttpException(401, 'Wrong authentication token');
      return { ...convertDocument(user), roles: [] };
    }

    return null;
  } catch (error) {
    throw new HttpException(401, 'Wrong authentication token');
  }
};

export const authChecker: AuthChecker<IContext> = async (
  { context: { user } },
  roles: string[],
) => {
  // @Authorized()
  if (roles.length === 0) return !!user;

  if (!user) return false;

  console.debug('[DEBUG] roles:', JSON.stringify(roles, null, 2));

  if (user?.roles.some((role) => roles.includes(role))) return true;

  return false;
};
