var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
     type: String,
     required: true,
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
  //create instance of User

  var newUser = new User({
   email: 'pro.digmatema@gmail.com'
  });

  //save new User

  // newUser.save().then((doc) =>{ //newUser.save().then(succes callback, error handler callback);
  // console.log('This is our new user:',doc);
  // }, (err) => {
  //   console.log('Unable to save');
  // } );


  module.exports = {User};
