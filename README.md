# mailing-service
Mailing service developed with Node.js
## Installation
After cloning, cd into project directory and run
`npm install` <br />
Edit the `config.json` file to match your credentials.
<br />
## Running
`npm run` starts the server on http://localhost:3000 <br />

## Sending Mails

Sending text: `POST /mail/text` with body in format
```javascript
{
	"to": ["reciever1@mail.com", "reciever2@email.org"],
	"subject": "Sample Subject",
	"txt": "Sample Message"
}
```
Sending html: `POST /mail/text` with body in format
```javascript
{
	"to": ["reciever1@mail.com", "reciever2@email.org"],
	"subject": "Sample Subject",
	"html": "<h1> Sample Message </h1>"
}
```
