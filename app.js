var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
   res.render("game"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Game server is running!"); 
});