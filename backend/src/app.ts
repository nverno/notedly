import 'reflect-metadata';
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
// import type { ApolloServerPlugin } from 'apollo-server-plugin-base';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';
import { buildSchema } from 'type-graphql';
// import {
//   createComplexityRule,
//   simpleEstimator,
//   fieldExtensionsEstimator,
// } from 'graphql-query-complexity';
// import depthLimit from 'graphql-depth-limit';
import { API_PATH, NODE_ENV, PORT, ORIGIN, CREDENTIALS } from '@config';
import { dbConnection } from '@databases';
import {
  typegooseMiddleware,
  authMiddleware,
  authChecker,
  errorMiddleware,
} from '@middlewares';
import { logger, responseLogger, errorLogger } from '@utils';
import path from 'path';
// import { schema } from '@schemas';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(resolvers) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 5005;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initApolloServer(resolvers);
    this.initializeErrorHandling();
  }

  public async listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(
        `🎮 GraphQL Server running at http://localhost:${this.port}/${API_PATH}`,
      );
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    if (this.env !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(dbConnection.url, dbConnection.options);
  }

  private initializeMiddlewares() {
    if (this.env === 'production') {
      this.app.use(hpp());
      this.app.use(helmet());
    }

    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private async initApolloServer(resolvers) {
    const schema = await buildSchema({
      resolvers,
      authChecker,
      emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
      globalMiddlewares: [typegooseMiddleware],
    });

    const apolloServer = new ApolloServer({
      schema,
      // FIXME: failing when db is empty
      // validationRules: [
      //   depthLimit(5),
      //   createComplexityRule({
      //     maximumComplexity: 1000,
      //     estimators: [
      //       // Using fieldExtensionsEstimator is mandatory to make it work with type-graphql.
      //       fieldExtensionsEstimator(),
      //       simpleEstimator({
      //         defaultComplexity: 1,
      //       }),
      //     ],
      //   }),
      // ],
      plugins: [
        this.env === 'production'
          ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
      context: async ({ req }) => {
        try {
          const user = await authMiddleware(req);
          return { user };
        } catch (error) {
          throw new Error(error);
        }
      },
      formatResponse: (response, request) => {
        responseLogger(request);

        return response;
      },
      formatError: (error) => {
        errorLogger(error);

        return error;
      },
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({
      app: this.app,
      cors: ORIGIN,
      path: `/${API_PATH}`,
      onHealthCheck: () =>
        new Promise((resolve, reject) => {
          if (mongoose.connection.readyState > 0) resolve(null);
          else reject();
        }),
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
