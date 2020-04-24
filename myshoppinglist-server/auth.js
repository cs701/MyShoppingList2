var admin = require("firebase-admin");
var mysql = require('mysql');
var md5 = require('md5');
const axios = require('axios');

var serviceAccount = require("./my-shopping-list-71329-firebase-adminsdk-7rbf6-5219090ef9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-shopping-list-71329.firebaseio.com"
});


var con = mysql.createConnection({
  host: "shoppingdb.ce3kph6db1qt.us-east-2.rds.amazonaws.com",
  port : "3306",
  user: "admin",
  database : "shoppinglist",
  password: "metcs701"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var action = "in";
var email = "test11@test.com";
var password = "test123";

if (action == "up"){

  admin.auth().createUser({
    email: email,
    password: password
  })
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);

    var sql = "INSERT INTO user(user_id, user_email) VALUES ('"+userRecord.uid+"','"+userRecord.email+"')";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      password = md5(password);
      sql = "INSERT INTO auth( user_id, hash_pw) VALUES ('"+userRecord.uid+"', '"+password+"')";
      console.log(sql);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });


  })
  .catch(function(error) {
    console.log('Error creating new user:', error);
    return;
  });

}

if (action == "in"){

  password = md5(password);
  admin.auth().getUserByEmail(email)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      var uid = userRecord.toJSON().uid;
      con.query("SELECT * FROM auth WHERE user_id = '"+uid+"' AND hash_pw='"+ password+ "'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      console.log('Successfully fetched user data:', userRecord.toJSON().uid);
    })
    .catch(function(error) {
     console.log('Error fetching user data:', error);
    });


}
