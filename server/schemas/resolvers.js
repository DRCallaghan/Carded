const { AuthenticationError } = require('apollo-server-express');
const { Profile, Team } = require('../models');
const { update } = require('../models/Profile');
const auth = require('../utils/auth');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate('team');
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('team');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate('team');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    teams: async () => {
      return Team.find().populate('manager').populate('members');
    },

    team: async (parent, { teamId }) => {
      return Team.findOne({ id: teamId }).populate('manager').populate('members');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addPhone: async (parent, { profileId, phone }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { phoneNumber: phone },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    addTeam: async (parent, { name, address, website, managerId }) => {
      const team = await Team.create({ name: name, address: address, website: website, manager: { _id: managerId } });
      await Profile.findOneAndUpdate(
        { _id: managerId },
        { $push: { team: team } }
      );
      return team;
    },
    addMember: async (parent, { teamId, memberId }) => {
      const updatedTeam = await Team.findOneAndUpdate(
        { _id: teamId },
        { $push: { members: memberId } },
        { new: true },
      );
      await Profile.findOneAndUpdate(
        { _id: memberId },
        { $push: { team: updatedTeam } }
      );
      return updatedTeam;
    },
    updateTeamAddress: async (parent, { teamId, address }) => {
      return await Team.findOneAndUpdate(
        { _id: teamId },
        { address: address },
        { new: true }
      );
    },
    updateTeamWebsite: async (parent, { teamId, website }) => {
      return await Team.findOneAndUpdate(
        { _id: teamId },
        { website: website },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a phone from their own profile
    removePhone: async (parent, { phone }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $unset: { phoneNumber: phone } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMember: async (parent, { teamId, memberId }) => {
      const updatedTeam = await Team.findOneAndUpdate(
        { _id: teamId },
        { $pull: { members: memberId } },
        { new: true },
      );
      await Profile.findOneAndUpdate(
        { _id: memberId },
        { $pull: { team: updatedTeam } }
      );
      return updatedTeam;
    },
  },
};

module.exports = resolvers;
