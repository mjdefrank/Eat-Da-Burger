//Inside burger.js, import orm.js into burger.js
var ORM= require('../config/orm.js');

//Create the code that will call the ORM functions using burger-specific input for the ORM.
//Code borrowed and altered from https://github.com/kellymersereau/Eat-Da-Burger/blob/master/models/burger.js

//Create an object model
var burger = {

//initialize a key of all that will run the function when burgers.all is called
	selectAll: function(callback){ //***I don't understand why we're feeding this function an argument that's called in it's child function

//call the imported(required) orm module function with the corresponding method
		ORM.selectAll( function(response){

//I'm lost on the relationship below...callback is a writer-defined argument, not a function.	
			callback(response);//
		});
	}, //separating to the next key 
	
//initialize another key that will run the function insertOne from orm module accepts two arguments newBurger & callback	
	insertOne: function(newBurger, callback){
//running .insertOne function from orm.js, passing it the first argument from the parent function (**I don't understand why**), second argument is a callback
		ORM.insertOne(newBurger, function(response){
			callback(response); //argument from parentfunction (callback) run with an argument of response **where does this come from?
		});
	},
//initialize a third key that will run the update function
	updateOne: function(burgerId, callback){
		ORM.updateOne(burgerId, function(response){
			callback(response);
		});
	}
};

//Export at the end of the burger.js file.
module.exports = burger;