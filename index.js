const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');

//DataBase setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

//App setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server setup
const port = process.env.PORT || 8000;
const server = http.createServer(app); 
server.listen(port);
console.log('Server running on port ' + port)