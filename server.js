const express = require('express');

const app = express();

app.get('/', function(req, res){

  res.send('hello jim.')
});


app.listen(8000)
