import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      phoneNumber
      team {
        _id
        name
        address
        website
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      phoneNumber
      team {
        _id
        name
        address
        website
        manager {
          _id
        }
        members {
          _id
        }
      }
    }
  }
`;

export const QUERY_PROFILE_BY_NAME = gql`
  query profileByName($profileName: String!) {
    profileByName(profileName: $profileName) {
      _id
      name
      email
      phoneNumber
      team {
        _id
        name
        address
        website
        manager {
          _id
        }
        members {
          _id
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      phoneNumber
      team {
        _id
        name
        address
        website
        manager {
          _id
        }
        members {
          _id
        }
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  query allTeams {
    teams {
      _id
      name
      address
      website
      manager {
        _id
        name
        email
        phoneNumber
        position
      }
      members {
        _id
        name
        email
        phoneNumber
        position
      }
    }
  }
`;

export const QUERY_SINGLE_TEAM = gql`
query singleTeam($teamId: ID!) {
  team(teamId: $teamId) {
    _id
    name
    address
    website
    manager {
      _id
      name
      email
      phoneNumber
      position
    }
    members {
      _id
      name
      email
      phoneNumber
      position
    }
  }
}
`;
