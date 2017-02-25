// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
// const table = require('/table.json');

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
// This is representative of a user inputting their information as an object
var customerNew = {
  routeName: "yoda",
  name: "yoda",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}

app.post('/api/table', function (req,res){
	fs.readFile('./table.txt', 'utf8', function(err, data){
		if (err) throw err;

		console.log(typeof data); //data is a string (useful info to know so we know how to deal with data)

		//parse the string data so it can be pushed into the same array every time
		var temp = JSON.parse(data);
		//console.log(temp);

		//then take the parsed data and push it in to the new customer information (this is in memory)
		temp.push(customerNew);
		//console.log(temp);

		//take the new information (that is being store in memory) and write it to the file
		fs.writeFile('./table.txt', JSON.stringify(temp), function (err) {
			if (err) throw err;
			console.log("this data was appended");
			console.log(temp);
		});
		

	});





});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});