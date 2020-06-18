const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

const helmet = require('helmet');
const morgan = require('morgan');

server.use(logger);
server.use(helmet());
server.use(morgan('dev'));

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req, res) => {
    res.send(`WELCOME TO WILLY WONKA'S CHOCOLATE FACTORY`)
})

function logger(req, res, next){
    const {method, url} = req;

    const timestamp = Date.now().toString();
  
    console.log(`${method} to ${url} @ ${timestamp}`);
   
    next();
}

module.exports = server;