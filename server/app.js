const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

express.urlencoded({ extended: true });
express.json();

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});
