const { Schema, model } = require('mongoose');
const Profile = require('./Profile');

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ],
});

const Team = model('Team', teamSchema);

module.exports = Team;
