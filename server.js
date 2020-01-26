const express = require('express');
const globals = require ('./globals.js')

const app = express();
const env = new globals();

app.get('/', function(req, res){
  res.send('hello jim.')
});

app.listen(env.port, () => {
  console.log(`Server started at port ${env.port}`)
})
