const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    phoneNumber: String
    position: String
    team: [Team]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Team {
    _id: ID
    name: String
    address: String
    website: String
    manager: Profile
    members: [Profile]
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    profileByName(profileName: String!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    teams: [Team]!
    team(teamId: ID!): Team
  }

  type Mutation {
    addProfile(name: String!, email: String!, phoneNumber: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPhone(profileId: ID!, phone: String!): Profile
    addTeam(name: String!, address: String!, website: String! managerId: ID!): Team
    addMember(teamId: ID!, profileName: String!, position: String!): Team
    updateTeamAddress(teamId: ID!, address: String!): Team
    updateTeamWebsite(teamId: ID!, website: String!): Team
    removeProfile: Profile
    removePhone(phone: String!): Profile
    removeMember(teamId: ID!, profileId: ID!): Team
  }
`;

module.exports = typeDefs;
