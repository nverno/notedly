// import { gql } from 'apollo-server-express';
// import { Query, Resolver } from 'type-graphql';
// import { EntityRepository } from 'typeorm';

// export const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// @EntityRepository()
// class HelloRepository {}

// @Resolver()
// export class helloResolver extends HelloRepository {
//   @Query(() => String, {
//     description: 'Say hello',
//   })
//   async getHello(): Promise<string> {
//     return 'Hello World!';
//   }
// }
