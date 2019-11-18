const express = require('express');
const morgan = requir('morgan');

const app = express();
app.use(morgan('dev'));
