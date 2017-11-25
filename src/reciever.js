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

// Middleware - bodyParser for parsing SMS
app.use(bodyParser());

// POST request to {server_name}/sms to return a message
app.post('/sms', (req, res) => {
	
	// Logs the message and it's properties in the console
	console.log(req.body);

	// Create conditions for 

	// Create a response
	const twiml = new MessagingResponse();
	twiml.message('RESPONSE SENT FROM BOT!');
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
	console.log("Server is listening on port 1337");
});
