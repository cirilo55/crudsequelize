const express = require('express');
var cors = require('cors')
const routes = require('../routes');

const server = express();

server.use(cors())

server.use(express.json());

server.use('/api', routes);

module.exports = server;