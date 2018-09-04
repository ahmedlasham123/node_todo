
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
// var objId = new ObjectID();
// console.log(objId);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect');
    }
    console.log('connected');
    // db.collection('Todos').insertOne(
    //   {
    //     text: "something to do",
    //     completed: true
    //   },
    //   (err, result) => {
    //     if(err){
    //       return console.log('error', err);
    //     }
    //     console.log(result.ops);
    //   }
    // );
    //
    // db.collection('Users').insertOne(
    //   {
    //     name: "ahmed",
    //     age: 33,
    //     location: "nesha"
    //   },
    //   (err, result) => {
    //     if(err){
    //       return console.log("errors", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );
    db.close();
});
