var connection = require('./connection.js');
var ORM ={
//------------------I don't get why we're using callbacks as an argument for the parent function ------------	
	//selectAll()
	selectAll: function(callback) //<-why do these require a argument of "callback"?
	{
		connection.query('SELECT * FROM burgers;', function(err, result) {
			if (err) throw err;
			callback(result); //<------??
		});
	},
	//insertOne()
	insertOne: function(newBurger, callback)
	{
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)', [newBurger], function(err, result) {
			if (err) throw err;
			callback(result); //<-------???
		});
	},
	//updateOne()
	updateOne: function (burgerId, callback) {
	connection.query('UPDATE burgers SET devoured = TRUE WHERE id= ?', burgerId, function(err, result) {
		if (err) throw err;
		callback(result); //<-----???
		});
	}
};

module.exports= ORM;