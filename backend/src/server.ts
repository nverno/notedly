import App from '@/app';
import { validateEnv } from '@utils';

import { authResolver, UserResolver, NotesResolver } from '@resolvers';

validateEnv();

const app = new App([authResolver, UserResolver, NotesResolver]);

app.listen();
