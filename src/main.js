//
//
//  Pregnacare
//  main.js
//
//  Create by Team Pregnacare
//
//  

// Ge the account SID and auth token to authenticate our service
const accountSid = "";
const authToken  = "";

// Setup the client using our SID and auth token
const client = require('twilio')(accountSid, authToken);

// Create a message from out client
client.message.create({
	to: 'enter_recipient_number',
	from: 'number_we_bought',
	body: 'Test message'

// Log out the message SID once sent
}).then((message) => { console.log(message.sid); })
