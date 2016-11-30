// const MongoClient  = require('mongodb').MongoClient; // used to connect to db
// we want to pull off MongoClient, ObjecID
const {MongoClient, ObjectID} = require('mongodb'); //object distructuring-making vars out of object properties

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server...');

// db.collection('Todos'): targeted operator ; Todos

// db.collection('Todos').findOneAndUpdate({
// _id: new ObjectID('583dabc9d05ee2788a20ff3c') //filter by ID
// },{
//   $set: {completed: true} // mongodb update operators
// },{
//   returnOriginal: false  //return updated info
// }).then((results)=> { //get results and do something with them
//   console.log(results);
// });


// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('583db9ed608367c65c4d10f7')
// },{
//   $set:{name: 'Digotetso'}
// },{
//   returnOriginal: false
// } ).then((results) => {
//   console.log(results);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('583db9ed608367c65c4d10f7')
},{
  $currentDate:{time: true}
},{
  returnOriginal: false
} ).then((results) => {
  console.log(results);
});
  //db.close();
});
