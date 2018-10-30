const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://drahcirtanz:rapscallionz2012@ds149268.mlab.com:49268/todoapp' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://drahcirtanz:rapscallionz2012@ds149268.mlab.com:49268/todoapp', { useNewUrlParser: true });

mongoose.set('useFindAndModify', false);

module.exports = {mongoose};