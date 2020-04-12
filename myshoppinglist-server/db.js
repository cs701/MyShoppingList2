// const mysql = require('mysql');
//
// const con = mysql.createConnection({
//     host: "shoppingdb.ce3kph6db1qt.us-east-2.rds.amazonaws.com",
//     user: "admin",
//     password: "metcs701",
//     database:"shoppinglist"
// });
//
// con.connect(function(err) {
//     if (!err)
//         console.log(`Database connected`);
//     else
//         console.log('error in DB connection: ' + JSON.stringify(err,undefined,2));
// });
//
//
//
// module.exports = mysql;


const Sequelize = require("sequelize");
const db = {};
var sequelize = new Sequelize('shoppinglist', 'admin', 'metcs701', {
    host: 'shoppingdb.ce3kph6db1qt.us-east-2.rds.amazonaws.com',
    dialect:'mysql'
    }
)

db.sequelize = sequelize;

module.exports = db;
