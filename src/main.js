//
//
//  Pregnacare
//  main.js
//
//  Create by Team Pregnacare
//
//  

// Ge the account SID and auth token to authenticate our service
const accountSid = "PN2f9d07ef0e7ad3314a5639b6ae5c3680";
const authToken  = "39735a04f6b7b7c32c02a8452e0ea180";

// Setup the client using our SID and auth token
const client = require('twilio')(accountSid, authToken);

// Create a message from out client
client.message.create({
	to: '+447400943630',
	from: '+441543624336',
	body: "Hello, I am not a bot!"

// Log out the message SID once sent
}).then((message) => { console.log(message.sid); })
