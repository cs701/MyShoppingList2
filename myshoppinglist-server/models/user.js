
const Sequelize = require('sequelize');
const db = require('../db.js');

const User = db.sequelize.define(
    'user',
    {
        user_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        user_first: {
            type: Sequelize.STRING
        },
        user_last: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        user_modified: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        user_created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        user_gender: {
            type: Sequelize.CHAR(1)
        },
        user_google_user: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        tableName: 'user'
    }
);

module.exports  = User;
