// import { join } from 'path';
// import { ConnectionOptions } from 'typeorm';
// import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';

// export const dbConnection: ConnectionOptions = {
//   type: 'postgres',
//   host: DB_HOST,
//   port: DB_PORT,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
//   synchronize: true,
//   logging: false,
//   entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
//   migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
//   subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
//   cli: {
//     entitiesDir: 'src/entities',
//     migrationsDir: 'src/migration',
//     subscribersDir: 'src/subscriber',
//   },
// };

import mongoose from 'mongoose';
import { DB_HOST, DB_PORT, DB_DATABASE, MONGO_URI } from '@config';

export const dbConnection: { url: string; options: mongoose.ConnectOptions } = {
  url: MONGO_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    // useNewUrlParser: true,
    autoIndex: true,
    autoCreate: true,
  },
};
