// const MongoClient  = require('mongodb').MongoClient; // used to connect to db
// we want to pull off MongoClient, ObjecID
const {MongoClient, ObjecID} = require('mongodb'); //object distructuring-making vars out of object properties

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server...');
// db.collection('Todos').insertOne({ //add data to database
//   text: 'add some text',
//   completed: false
// },(err, results) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(results.ops, undefined, 2));
// });


db.collection('Users').insertOne({
  name: 'Digotetso',
  surname: 'Matema',
  age: 27,
  location: 'Gaborone'
},(err, results) => {
if (err) {
  return console.log('Unable to add users');
}
console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined, 2)); //results.ops: array of all doc that got inserted
});
  db.close();
});
