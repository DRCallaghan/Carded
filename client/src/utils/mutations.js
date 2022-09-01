import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
        phoneNumber
      }
    }
  }
`;

export const ADD_PHONE = gql`
  mutation addPhone($profileId: ID!, $phone: String!) {
    addPhone(profileId: $profileId, phone: $phone) {
      _id
      name
      email
      phoneNumber
    }
  }
`;

export const ADD_TEAM = gql`
  mutation addTeam($name: String!, $managerId: ID!) {
    addTeam(name: $name, managerId: $managerId) {
      _id
      name
      address
      website
      manager {
        _id
        name
        email
        phoneNumber
      }
      members {
        _id
        name
        email
        phoneNumber
      }
    }
  }
`;

export const ADD_MEMBER = gql`
  mutation addMember($teamId: ID!, $memberId: ID!) {
    addMember(teamId: $teamId, memberId: $memberId) {
      _id
      name
      address
      website
      members {
        _id
        name
        email
        phoneNumber
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PROFILE = gql`
  mutation removeProfile {
    removeProfile {
      _id
      name
      email
      phoneNumber
      team {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PHONE = gql`
  mutation removePhone($phone: String!) {
    removePhone(phone: $phone) {
      _id
      name
      phoneNumber
    }
  }
`;

export const REMOVE_MEMBER = gql`
  mutation removeMember($teamId: ID!, $memberId: ID!) {
    removeMember(teamId: $teamId, memberId: $memberId) {
      _id
      name
      members {
        _id
        name
        email
        phoneNumber
      }
    }
  }
`;
