const { Schema, model } = require('mongoose');
const Profile = require('./Profile');

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        unique: true,
        trim: true,
    },
    website: {
        type: String,
        unique: true,
        trim: true,
        match: [/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Must match a valid URL!'],
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
