var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {User} = require('./Models/users');
var {Todo} = require('./Models/todo');

var app = express();

//middlewear
app.use(bodyParser.json()); //bodyParser.json() returns a middlewar wich passed to app.use-takes a middlewear

//set up a route
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  // console.log(req.body); // get body data sent from the client(use req)

  todo.save().then((doc) => {
    // callback for succes
    res.send(doc); // send requested info to the user
  },(e) => {
    //callback for error
  res.status(400).send(e); // send back the error
  });
});

//to get all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
