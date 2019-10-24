const express = require('express');
const router = express.Router();

router.get('/', (require, response) => {
  res.send('GET route on things.');
});
router.post('/', (require, response) => {
  res.send('POST route on things.');
});

module.exports = router;