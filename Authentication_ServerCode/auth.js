var admin = require("firebase-admin");
var mysql = require('mysql');
var md5 = require('md5');
const axios = require('axios');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cors = require('cors');
var corsOptions = {
origin: "http://localhost:4200"
};

var bodyParser = require("body-parser");
var app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var serviceAccount = require("./my-shopping-list-71329-firebase-adminsdk-7rbf6-5219090ef9.json");

app.listen(1337, function(){
  console.log("Listening at port 1337");
})

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


app.get('/test', function(req,resp){
  var email = req.query.email;
  console.log('hello');



  var password=req.query.password;
  var action = "up";







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

req.query



});



app.post('/login',function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  var action = req.body.action;
  //console.log("User name = "+user_name+", password is "+password);
  //res.end("yes");





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
        res.json({ uid: userRecord.toJSON().uid})
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
      res.json({ uid: userRecord.toJSON().uid})
    })
    .catch(function(error) {
     console.log('Error fetching user data:', error);
    });


}

});
