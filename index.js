const express = require('express');
const session = require('express-session');
const store = require('better-express-store');

const app = express();
const RestApi = require('./RestApi');
const ACL = require('./ACL');
const ACLsettings = require('./ACLsettings');

// Make Express able to read the req.body
app.use(express.json());

// Prevent badly formatted JSON in request.body from causing errors
// (Note: express middleware can take an extra parameter error)
app.use((error, req, res, next) => {
  console.log("ERROR", error)
  if (error) {
    res.status(500);
    res.json({
      error: 'Something went wrong - probably badly formatted JSON',
      errorDetails: error
    });
  }
});

// Add express-session as middleware to our express app
// so that we can handle sessions
app.use(session({
  secret: require('./session-secret.json'),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
  store: store({ dbPath: './database.db' })
}));

// Add our own middleware for handling ACL (Access Control)
// important since we are looking at req.session in the ACL middleware
// we must register it after registering the session middleware
app.use(ACL(ACLsettings));

// Create the REST api
new RestApi(app);

// Start the web server
app.listen(3000, () => { console.log('Listening on port 3000') });