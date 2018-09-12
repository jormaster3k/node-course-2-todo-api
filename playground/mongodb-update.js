// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5b97e20adf40cb47637f8e92')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5b97e46ddf40cb47637f8ecd")
    }, {
      $set: {
        name: 'Jory Osterman'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

  client.close();
});

