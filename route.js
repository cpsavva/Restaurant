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
app.use(express.static(__dirname));


//Reservations (DATA)
// =============================================================

// This is representative of a user inputting their information as an object
var customerNew = {
  routeName: "yoda",
  name: "yoda",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}




// Routes
// =============================================================
app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, 'main.html'));
	res.sendFile(path.join(__dirname, 'main.css'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reservations.html'));
});


app.get('/tables', function (req, res){
	res.sendFile(path.join(__dirname, 'tables.html'));	

});



app.post('/api/table', function (req,res){
	fs.readFile('./table.txt', 'utf8', function(err, data){
		if (err) throw err;

		console.log(typeof data); //data is a string (useful info to know so we know how to deal with data)


		//parse the string data and set it to a temp
		//var so it can be pushed into the same array every time
		var temp = JSON.parse(data);
		console.log(temp);
		console.log(temp.length);

		if (temp.length < 5) {

			//then take the parsed data and push it in to the new customer information (this is in memory)
			temp.push(customerNew);

			//take the new information (that is being store in memory) and write it to the file
			fs.writeFile('./table.txt', JSON.stringify(temp), function (err) {
				if (err) throw err;
				console.log("this data was appended");
				console.log(temp);
			});

		}else{

			fs.readFile('./waitlist.txt', 'utf8', function(err, data){
				if (err) throw err;
				var waitTemp = JSON.parse(data);

				waitTemp.push(customerNew);

				fs.writeFile('./waitlist.txt', JSON.stringify(waitTemp), function (err) {
					if (err) throw err;
					console.log("this data was appended");
					console.log(waitTemp);
				});
			});
		}

	});

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});