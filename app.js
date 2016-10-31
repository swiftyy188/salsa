// npm install nodemon --save-dev
//add in json file -  "dev": "node ./node_modules/nodemon/bin/nodemon.js app.js"
//  "devDependencies": {"nodemon": "^1.10.2"}
//npm run dev to start server
var express		= require("express"),
	app			= express(),
	bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("home")
});
app.get("/api", function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({"banana": true}));
})



app.listen(3000, function(){
	console.log("Salsa Server started");
});