const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/Models/todo');
const {User} = require('./../server/Models/users') // importing users model
const {mongoose} = require('./../server/db/mongoose');



// var id = '683f189e83125530478385a1888';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not Valid');
// }
//
// //documentaion for Queries: mongoosejs.com-read docs-queries
// Todo.find({  // query as many to do as want...return array with one object
//   _id: id   //query todos by unique 'id'
// }).then((todos) =>{   //get all our todos
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({  // query as many to do as want...returns object
//   _id: id   //query todos by 'id'
// }).then((todo) =>{   //get all our todos
//   console.log('Todos:', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   //handle situation if Id doesn't exist
//   if(!todo){
//     return console.log('Id Not Found');
//   }
//   console.log('Find by id',todo);
// }).catch((e) => console.log(e));


//Query user
var id = '583fbd7aa525e43eec8b6aa8';

User.find({
  _id: id
}).then((users) => {

  console.log('User:', users);
});
User.findOne({
  _id: id
}).then((user) => {
  console.log('User:', user);
});
User.findById(id).then((user) => {
  if(!user){
    return console.log('User not Found');
  }
  console.log('by ID:', user);
}).catch((e) => console.log(e));
