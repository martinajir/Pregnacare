//
//
//  Pregnacare
//  main.js
//
//  Create by Team Pregnacare
//

// Ge the account SID and auth token to authenticate our service
const accountSid = "AC0c7ee6526a8385baa0675ad02d46ac79";
const authToken  = "39735a04f6b7b7c32c02a8452e0ea180";

// Setup the client using our SID and auth token
const client = require('twilio')(accountSid, authToken);

// Create a message from out client
client.messages.create({
	to: '+447400943630',
	from: '+441543624336',
	body: "Hello, I am not a bot!"

// Log out the message SID once sent
}).then((message) => { console.log(message.sid); })
