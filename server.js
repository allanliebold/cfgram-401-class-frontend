'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.us(express.static(`${__dirname}/build`));

app.listen(PORT, function() {
  console.log('listening on:', PORT);
});
