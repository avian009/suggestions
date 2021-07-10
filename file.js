const express = require('express');
const app=express();

const sqlite3 = require('sqlite3');
var db =new sqlite3.Database("db/comments.db");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use (express.static(__dirname +"/public") );

app.get ("/" ,function (req, res) {
  res.send("hello world");

})
app.get ("/comments",function (req, res) {
  console.log("get request recieved at / comments");
  db.all("SELECT *FROM comments " ,function (err, rows) {
    if(err) {console.log("error :" +err);
  }
  else {

    res.send(rows);
  }

  })

})
app.post ("/comments",function (req, res) {
  console.log("post request recieved at / comments");
  db.run("INSERT INTO comments VALUES(?,?)") ,
  [req.body.name,req.body.comment],function(err){
    if(err) {console.log("error:" +err);

    }
    else {  response.status(200).redirect("indext.html");
  }
  }

});

app.listen (30000,function () {

console.log("server is running");


})
