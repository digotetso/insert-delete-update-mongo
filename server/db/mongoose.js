var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //tell mongoose to use built-in promise
mongoose.connect(process.env.MONGOLAB_RED_URI || 'mongodb://localhost:27017/TodoApp'); // connect to database
