var express = require('express');
var bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./Models/users');
var {Todo} = require('./Models/todo');



var app = express();
var port = process.env.PORT || 3000;

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

//
app.get('/todos/:id', (req, res) => {  // get id from the user
  var id = req.params.id;
  console.log('583f189e83125530478385a1');
  if(!ObjectID.isValid(id)){  // check if the id is valid
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => { // check todo(object) to with associated id in db
    if(!todo){
      res.status(404).send();
    }
  res.send({todo});   // if it  exist send it back to the client
}).catch((e) => {
  return res.status(404).send();
})
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});



module.exports.app = () =>{app};
