let express = require('express');
let app = express();
let mysql = require('mysql1');
const bParse = require("body-parser");
app.use( bParse.urlencoded({extend:true}));



app.get("/stuff", function( req, res){
    console.log("Got the get from get");
    res.send( "Got the get");
});
app.get("*", function( req, res){
    console.log("Got other ");
    res.send( "Sorry the page you requested is not found");
});
app.post("/stuff", function( req, res){
    console.log("Got the post from post body ->>");
    console.log(req.body);
    let age = req.body.age;
    let first = req.body.fName;
    if(age < 18) {
        res.send(`You cannot pass: ${age} ${first}`);
    } else {
        res.send(`Sure ${first}, you can visit ${age}`);
    }
    res.send( "Got the post");
});
app.post("/tasks", function( req, res){
    console.log("Task Route->>");

});

let port = 3000;
let server = app.listen( port, function(){
    console.log( `listing on port:${port} http://localhost:${port}/`)
})