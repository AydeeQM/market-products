const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main/routes');

const app = express();

app.use('/api/v1', router);


//server
app.listen(8080, () => {
  console.log('server on port 8080');
});