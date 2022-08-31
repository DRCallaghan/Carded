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
      manager {
        _id
      }
      members {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_TEAM = gql`
  query singleTeam($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      name
      manager {
        _id
      }
      members {
        _id
      }

    }
  }
`;
