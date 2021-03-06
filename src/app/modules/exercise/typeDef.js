import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @auth on FIELD_DEFINITION
  directive @hasRole(roles: [Role!]) on FIELD_DEFINITION

  type Query {
    getExercises: [Exercise!]!
    getExerciseById(id: ID!): Exercise!
  }

  type Mutation {
    createExercise(input: exerciseInput!): Exercise!
      @auth
      @hasRole(roles: [ADMIN])
    updateExercise(id: ID!, input: exerciseInput!): Exercise!
      @auth
      @hasRole(roles: [ADMIN])
    deleteExercise(id: ID!): Boolean! @auth @hasRole(roles: [ADMIN])
  }

  input exerciseInput {
    name: String
    muscleGroups: [Int!]
  }

  enum Role {
    ADMIN
    USER
  }
`;

export default typeDefs;
