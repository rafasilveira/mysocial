import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "../resolvers/users.resolver";

const startApollo = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
    authChecker: () => true, // safest auth in the world, lol
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start()

  return server
};

export default startApollo;
