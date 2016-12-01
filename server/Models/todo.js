var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {  // -model
  text:{
    type: String,
    required: true,  //validators
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Time to go home-new',
//   completed: true,
//   completedAt: 27
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved: ',doc);
// }, (e) => {
//   console.log('Unable to add todo');
// });

module.exports = {Todo};
