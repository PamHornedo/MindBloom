import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
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

  type Mutation {
    dummy: String
  }
`;
