const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    manager: {
        profileSchema
    },
    members: [
        profileSchema
    ],
});

const Team = model('Team', teamSchema);

module.exports = Team;
