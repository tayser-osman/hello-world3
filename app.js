const express = require('express');
const logger = require('morgan');
const responseTime = require('response-time');

const app = express();
app.use(logger('dev'));
app.use(responseTime());

app.get('/', function(req, res, next) {
	res.send('Homepage');
});

app.get('/services', function(req, res, next) {
	res.send('Services page');
});

app.get('/services/:id', function(req, res, next) {
	res.send(`Service ${req.params.id} page`);
});

app.use('/api', function(req, res, next) {
	res.send('API page');
});

app.get('/products', function(req, res, next) {
	res.send('Products page');
});

app.get('/products/:id', function(re, res, next) {
	res.send(`Product ${req.params.id} page`);
});

app.use('/partners', function(req, res, next) {
	res.send('Partners page');
});

app.get('/contact-us', function(req, res, next) {
	res.send('Contact us page');
});

app.get('/about', function(req, res, next) {
	res.send('About page');
});

app.get('/faq', function(req, res, next) {
	res.send('FAQ page');
});

app.get('/terms', function(req, res, next) {
	res.send('Terms page');
});

app.get('/privacy', function(req, res, next) {
	res.send('Privacy page');
});

app.get('/admin', function(req, res, next) {
	res.send('Admin page');
});

app.listen(3000, () => console.log('server is running on port 3000..'));
