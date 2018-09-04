
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
// var objId = new ObjectID();
// console.log(objId);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect');
    }
    console.log('connected');

    // deleteMany
    db.collection('Todos').deleteMany({ text: 'Hello World' }).then((result)=>{
      console.log(result);
    });
    // deleteOne

    // findOneAndDelete

    //

    // db.close();
});
