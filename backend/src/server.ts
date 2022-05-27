import App from '@/app';
import { validateEnv } from '@utils';

import {
  authResolver,
  userResolver,
  helloResolver,
  notesResolver,
} from '@resolvers';

validateEnv();

const app = new App([authResolver, userResolver, helloResolver, notesResolver]);

app.listen();
