//
//  Pregnacare
//  reciever.js
//
//  Created by Team Pregnacare
//

// Import all the needed modules
const http = require('http')
const bodyParser = require('body-parser');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Initialise the express app
const app = express()

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());
app.use(bodyParser());

// POST request to {server_name}/sms to return a message
app.post('/sms', (req, res) => {

	console.log(req.body);

	// Create a response
	const twiml = new MessagingResponse();
	twiml.message('RESPONSE SENT FROM BOT!');
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
	console.log("Server is listening on port 1337");
});
