const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
	res.send('Homepage');
});

app.get('/contact-us', function(req, res, next) {
	res.send('Contact us page');
});

app.get('/about', function(req, res, next) {
	res.send('About page');
});

app.listen(3000, () => console.log('server is running on port 3000..'));
