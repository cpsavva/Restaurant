
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname + '/tables.html'));
});

app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname + '/reservations.html'));
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/main.html'));
});

// Creates JSON object for tables
app.get('/api/tables', function(req, res){	
		res.json(tables);
})

// Creates JSON object for reservations
app.get('/api/waitList', function(req, res){	
		res.json(waitList);
})


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});