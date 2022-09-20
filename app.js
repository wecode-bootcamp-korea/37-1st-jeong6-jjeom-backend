require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const { DataSource } = require('typeorm');

const myDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE
})

myDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/ping', function (req, res, next) {
    res.json({message : 'pong'})
  })
   
  app.listen(3000, function () {
    'listening on port 3000'
  })