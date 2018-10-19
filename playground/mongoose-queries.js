const {ObjectID } = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "7ae1f66cad5c2c134b4af8e7";

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }

//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5bc8d3277054aa14946e4b42';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));