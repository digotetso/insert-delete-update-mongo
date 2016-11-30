const {MongoClient, ObjecID} = require('mongodb'); //object distructuring-making vars out of object properties

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server...');

  //deleting doc: deleteMany, deleteOne, findAndDelete

  db.collection('Todos').deleteMany({something: 'eat'}).then((result) => {
    console.log(`succeded:`, result);
  });
});
