const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/Models/todo');
const {User} = require('./../server/Models/users') // importing users model
const {mongoose} = require('./../server/db/mongoose');


//remove({})
//findbyIdAndRemove()
//findOneAndRemove({})

// Todo.remove({}).then((results) => {
//   console.log(results);
// })

Todo.findByIdAndRemove('58479fd43dcc6704569740ab').then((todo) => {
  console.log(todo);
})
