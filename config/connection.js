var mysql = require('mysql');
var PORT = 3000
var connection = mysql.createConnection({
	port: PORT,
	host: 'localhost',
	user: 'root',
	password: '',
	databas: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {console.error('error connection: ' +err.stack);
	return;}

	console.log('connected as id '+connection.threadId);
});

module.exports=connection;