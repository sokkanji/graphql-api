import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Tweet {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
