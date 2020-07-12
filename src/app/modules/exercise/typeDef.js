import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @auth on FIELD_DEFINITION
  directive @hasRole(roles: [Role!]) on FIELD_DEFINITION

  type Query {
    getExercises(id: ID): [Exercise!]!
  }

  type Mutation {
    createExercise(input: exerciseInput!): Exercise!
      @auth
      @hasRole(roles: [ADMIN])
    updateExercise(id: Int!, input: exerciseInput!): Exercise!
      @auth
      @hasRole(roles: [ADMIN])
    deleteExercise(id: Int!): Boolean! @auth @hasRoles(roles: [ADMIN])
  }

  type exerciseInput {
    name: String
    muscleGroup: Int
  }

  enum Role {
    ADMIN
    USER
  }
`;

export default typeDefs;
