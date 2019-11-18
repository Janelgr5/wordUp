const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

express.urlencoded({ extended: true });
express.json();

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(function(err, req, res, next) {
	console.log('Error: ', err);
	console.log(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, function() {
	console.log(`Welcome to your server on port ${port}!`);
});
