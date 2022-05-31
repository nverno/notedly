import App from '@/app';
import { validateEnv } from '@utils';

// import {
//   authResolver,
//   userResolver,
//   helloResolver,
//   notesResolver,
// } from '@resolvers';

validateEnv();

// [authResolver, userResolver, helloResolver, notesResolver]
const app = new App([]);

app.listen();
