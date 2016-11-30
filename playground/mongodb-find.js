// const MongoClient  = require('mongodb').MongoClient; // used to connect to db
// we want to pull off MongoClient, ObjecID
const {MongoClient, ObjecID} = require('mongodb'); //object distructuring-making vars out of object properties

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server...');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (error) {
  //     console.log('Unable to fetch Todos');
  //   }
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find({
    name: 'Digotetso'
  }).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos');
  });

  //db.close();
});
