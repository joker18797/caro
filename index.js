var express = require('express');
var jsonParser = require("body-parser").json();
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
var mysql = require('mysql');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


var conn = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'ql'
});

app.post('/signin',jsonParser, (req, res) => {
  
    var username=req.body.fullname;
    var password=req.body.password;
    if(username == "admin" && password == "123" || username =="admin2" && password == "1234"){
        //mangonl.push(username);
        //mangUser.push(username);
        res.send('success1');
    }
    else{
      res.send('Failure');
    }
});

// app.post('/signin',jsonParser, (req, res) =>{
//   var us = req.body.fullname;
//   var ps = req.body.password;
//   conn.connect(function(err){
//     if (err) throw err;
//     conn.query("SELECT username,password FROM user", function (err, result, fields){
//       for(let i=0 ; i<result.length;i++){
//         if(us == result[i].username && ps == result[i].password){
//           res.send('success1');
//         }
//         else{
//           res.send('Failure');
//         }
//       }
//       //console.log(result.length);
//     });
//   });
  
  
  
// });

