import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const ORIGIN = process.env.ORIGIN === 'true';

export const DEBUG_PREFIX = process.env.DEBUG_PREFIX ?? 'notedly';
export const DEBUG =
  process.env.DEBUG ?? process.env.NODE_ENV === 'development'
    ? `${DEBUG_PREFIX}:*`
    : undefined;

export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  API_PATH,
} = process.env;
