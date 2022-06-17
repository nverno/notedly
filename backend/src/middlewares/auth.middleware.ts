import { verify } from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions';
import { RequestWithUser, DataStoredInToken } from '@interfaces';
import { UserModel } from '@models';

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
      const userId = resp._id;
      const user = await UserModel.findById(userId);
      if (!user) throw new HttpException(401, 'Wrong authentication token');
    }

    return null;
  } catch (error) {
    throw new HttpException(401, 'Wrong authentication token');
  }
};

export const authChecker: AuthChecker<RequestWithUser> = async ({
  context: { user },
}) => {
  if (!user) {
    throw new HttpException(404, 'Authentication token missing');
  }

  return true;
};
