const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//server
app.listen(8080, () => {
  console.log('server on port 8080');
});