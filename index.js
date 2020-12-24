const express = require('express');

const app = express();
const RestApi = require('./RestApi');

app.use(express.json());

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

new RestApi(app);

app.listen(3000, () => { console.log('Listening on port 3000') });