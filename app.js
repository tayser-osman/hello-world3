const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
	res.send('Homepage');
});

app.listen(3000, () => console.log('server is running on port 3000..'));
