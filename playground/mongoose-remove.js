const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndDelete({_id: '5bca1707b717ba0138028a3d'}).then((todo) => {
// 	console.log(todo);
// });

// Todo.findByIdAndDelete('5bca1707b717ba0138028a3d').then((todo) => {
// 	console.log(todo);
// });

