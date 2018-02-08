/*Inside the burgers_controller.js file, import the following:
Express
burger.js*/
var express=require('express');
var burger=require('../models/burger.js');
var router = express.Router();

//***Unsure of what we're doing here***
router.get('/', function(request, result) {
	burger.selectAll(function (data) {
		var hbsObject = {
			burger: data
		};
		result.render('index', hbsObject);
	})
});

//***Unsure of what we're doing here***
router.put('/api/burger/:id', function(request, result) {
	//use req.params.id to pass through ORM method
	burger.updateOne(req.params.id, function(result) {
		if (result.changedRows == 0) 
		{
			return res.status(404).end();
		} else 
		{
			res.status(200).end();
		}
	});
});

//***Unsure of what we're doing here***
router.post('/api/burger/', function(request, result) {
	//use req.body to post info via insertOne ORM
	burger.insertOne(req.body.name, function(result) {
		res.json({id: result.id });	
	});
});

//export the router at the end of your file.
module.exports= router;