var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if(env === 'development')
{
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
else if(env === 'test')
{
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
else
{
	process.env.MONGODB_URI = 'mongodb://drahcirtanz:rapscallionz2012@ds149268.mlab.com:49268/todoapp';
}