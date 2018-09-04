
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
// var objId = new ObjectID();
// console.log(objId);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect');
    }
    console.log('connected');
  //   db.collection('Todos').find({
  //     _id: ObjectID('5b8efa4756b0d932129fe25d')
  //   }).toArray().then((docs)=>{
  //     console.log('Todos');
  //     console.log(docs);
  //   }, (err) => {
  //     console.log('unable to fetch docs', arr);
  //   }
  //
  // );
    // db.collection('Todos').find().count().then((docs)=>{
    //     console.log('Todos');
    //     console.log(docs);
    //   }, (err) => {
    //     console.log('unable to fetch docs', arr);
    //   }
    //
    // );
    db.collection('Users').find({ name: "iftrag"}).toArray().then((docs)=>{
      console.log(docs);
    },(err)=>{
      console.log(err);
    })

    // db.close();
});
