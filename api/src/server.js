const express = require('express');
const dotenv = require('dotenv');

const app = express();

require('dotenv').config();

app.listen(process.env.PORT || 3000, () => console.log('Server started on port', process.env.PORT || 3000));