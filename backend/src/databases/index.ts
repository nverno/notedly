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
import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  },
};

// export default {
//   connect: DB
// }
// module.exports = {
// connect: DB_HOST => {
// // Use the Mongo driver's updated URL string parser
// mongoose.set('useNewUrlParser', true);
// // Use findOneAndUpdate() in place of findAndModify()
// mongoose.set('useFindAndModify', false);
// // Use createIndex() in place of ensureIndex()
// mongoose.set('useCreateIndex', true);
// // Use the new server discovery and monitoring engine
// mongoose.set('useUnifiedTopology', true);
// // Connect to the DB
// mongoose.connect(DB_HOST);
// // Log an error if we fail to connect
// mongoose.connection.on('error', err => {
// console.error(err);
// console.log(
// 'MongoDB connection error. Please make sure MongoDB is running.'
// );
// process.exit();
