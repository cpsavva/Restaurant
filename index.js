// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Reservations (DATA)
// =============================================================
// const tables = [];
// const waitList = [];

// app.get('/api/table' function (req, res){
// 	console.log('hello');	

// })




// Routes
// =============================================================
	var hello = [{
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}]

app.post('/api/table', function (req,res){
	fs.readFile('table.json', function(err, data){
		if (err) throw err;
	
		fs.writeFile('table.json', JSON.push(hello), function (err) {
			if (err) throw err;
			// console.log("this data was appended");
// console.log(JSON.parse(data));
		});
		


	});

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});