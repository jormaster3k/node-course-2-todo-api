// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//   // deleteMany
//   db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
//       console.log(result);
//   })

  // deleteOne
//   db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
//       console.log(result);
//   })

  // findOneandDelete
//   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//       console.log(result);
//   })

//   db.collection('Users').deleteMany({name: "Jory Osterman"}).then((result) => {
//       console.log(result);
//   });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b97e4c5df40cb47637f8ed8')}).then((result) => {
      console.log(result);
  })

  client.close();
});

