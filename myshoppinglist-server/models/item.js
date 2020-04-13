
const Sequelize = require("sequelize");
const db = require('../db.js');
const User = require('./user.js');
const Item = db.sequelize.define(
    'item',
    {
        item_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item_product: {
            type: Sequelize.STRING
        },
        item_quantity: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        item_priority: {
            type: Sequelize.INTEGER,
            defaultValue: 3
        },
        item_deleted: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        item_purchased: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        item_modified: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        item_created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        user_user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        }
    },
    {
        timestamps: false,
        tableName: 'item'
    }
);

module.exports  = Item;

