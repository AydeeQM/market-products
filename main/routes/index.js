const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('GET route on things.');
});

router.post('/', (request, response) => {
  response.send('POST route on things.');
});

module.exports = router;