import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Habit {
    id: ID!
    name: String!
    frequency: String!
    completedDates: [String]
  }

  type Query {
    hello: String
  }

  type Auth {
    token: String!
    user: User!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): Auth!
  }
`;
