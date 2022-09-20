require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const route = require('./api/routes')
const { globalErrorHandler } = require('./api/utils/error')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(route)

app.get('/ping', function (req, res, next) {
    res.json({message : 'pong'})
  })

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the Server`)
  err.statusCode = 404;

  next(err)
})

app.use(globalErrorHandler)
  
app.listen(3000, function () {
    'listening on port 3000'
  })

