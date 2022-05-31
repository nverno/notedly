import fs from 'fs-extra';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionFromSchema, printSchema } from 'graphql/utilities';

const datadir = path.join(__dirname, '../data');
const schemaJson = path.join(datadir, 'schema.graphql.json');
const schemaGql = path.join(datadir, 'schema.graphql');

// XXX: import schema

// Write schema to graphql file
// https://getstream.io/blog/tutorial-create-a-graphql-api-with-node-mongoose-and-express/
const buildSchema = async () => {
  await fs.ensureFile(schemaJson);
  await fs.ensureFile(schemaGql);

  fs.writeFileSync(
    schemaJson,
    // eslint-disable-next-line
    JSON.stringify(await graphql(Schema, introspectionFromSchema), null, 2),
  );

  // eslint-disable-next-line
  fs.writeFileSync(schemaGql, printSchema(Schema));
};

async function main() {
  await buildSchema();
  console.log('Finished building schema');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
