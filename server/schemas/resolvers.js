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
    profileByName: async (parent, { profileName }) => {
      return Profile.findOne({ name: profileName }).populate('team');
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
      return Team.findOne({ _id: teamId }).populate('manager').populate('members');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, phoneNumber, password }) => {
      const profile = await Profile.create({ name, email, phoneNumber, password });
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
      const team = await Team.create(
        {
          name: name,
          address: address,
          website: website,
          manager: { _id: managerId }
        });
      await Profile.findOneAndUpdate(
        { _id: managerId },
        { $push: { team: team } }
      );
      return team;
    },
    addMember: async (parent, { teamId, profileName, position }) => {
      const member = await Profile.findOne(
        { name: profileName }
      );
      const updatedTeam = await Team.findOneAndUpdate(
        { _id: teamId },
        { $push: { members: member } },
        {
          new: true,
          runValidators: true,
        }
      ).populate('members');
      await Profile.findOneAndUpdate(
        { name: profileName },
        { $push: { team: updatedTeam } },
        {
          new: true,
          runValidators: true,
        }
      );
      await Profile.findOneAndUpdate(
        { name: profileName },
        { $set: { position: position } },
        {
          new: true,
          runValidators: true,
        }
      );
      return updatedTeam;
    },
    updateTeamAddress: async (parent, { teamId, address }) => {
      return await Team.findOneAndUpdate(
        { _id: teamId },
        { $set: { address: address } },
        { new: true }
      );
    },
    updateTeamWebsite: async (parent, { teamId, website }) => {
      return await Team.findOneAndUpdate(
        { _id: teamId },
        { $set: { website: website } },
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
    removeMember: async (parent, { teamId, profileId }) => {
      const updatedTeam = await Team.findOneAndUpdate(
        { _id: teamId },
        { $pull: { members: profileId } },
        {
          new: true,
          runValidators: true,
        }
      ).populate('members');
      await Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { team: teamId } },
        {
          new: true,
          runValidators: true,
        }
      );
      return updatedTeam;
    },
  },
};

module.exports = resolvers;
