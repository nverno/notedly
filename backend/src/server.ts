import App from '@/app';
import { validateEnv } from '@utils';

import { AuthResolver, UserResolver, NotesResolver } from '@resolvers';

validateEnv();

const app = new App([AuthResolver, UserResolver, NotesResolver]);

app.listen();
