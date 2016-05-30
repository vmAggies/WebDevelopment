//defining variables
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  ,	ejs = require("ejs")
  , univ = require('./routes/3duniversity')
  ,	mongo = require('./routes/mongodb_connect');


var app = express();
app.use(express.cookieParser());

//defining variables which will be used to post values to client
var title = 'Amazong Store';
var data = 'Shop items';
var output1 = '';
var output2 = '';
var output3 = '';



// all environments
app.set('port', process.env.PORT || 4242);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//defining variables which will be used to post values to client
var title = 'University Research Analysis';
var data = 'Analyse Graphs';
var output1 = '';
var output2 = '';
var output3 = '';

/**
 * This get method renders home page to user where user can view different options of website
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
/*
//	to create map/reduce collection
app.get('/', function(req, res, results) {
	mongo.temp(function(err,results){
		if(err){
			throw err;
		}else{ejs.renderFile('./views/index.ejs',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
		}
		});
});
*/
app.get('/', function(req, res, results) {
	ejs.renderFile('./views/index.ejs',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
});

app.get('/mapsearch', function(req, res, results) {
	ejs.renderFile('./views/a.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
});

app.get('/concept', function(req, res, results) {
	ejs.renderFile('./views/concept.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
});

/**
 * This get method renders university selection page where user can select 2 universities
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/compareUniv', function(req, res, results) {
	ejs.renderFile('./views/Comparison.ejs',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
});

/**
 * This post method renders all university graph over the years
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.post('/universityGraphs', function (req, res) {
	var name = req.param('university');
	//var univ1 = name[0];
	univ.createUnivGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/3dunivGraph.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					//console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	},name);
});

/**
 * This get method renders all university graph over the years
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/singleUniversity', function (req, res) {
			ejs.renderFile('./views/singleUniversity.ejs',
					{title : title, data : data},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
});


/**
 * This post method renders graph to compare between univeristies
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.post('/compareUniversityGraphs', function (req, res) {
	var name = req.param('university');
	var univ1 = name[0];
	var univ2 = name[1];
	univ.compareUnivGraph(function(err,results){
		if(err){
			throw err;
		}else{	
			var temp = [];
			temp.push(results[14]);   
			temp.push(results[15]);   
			ejs.renderFile('./views/compareUnivGraph.ejs',
					{title : title, data : data, output1 : results, output2 : temp},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					//console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	},univ1, univ2);
});


/**
 * This get method renders graph according to programs
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/programGraphs', function (req, res) {
	univ.createProgramGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/graphProgram.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	});
});


/**
 * This get method renders all university graph page to user
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/allUnivGraph', function (req, res) {
	univ.allUnivGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/allUnivGraph.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	});
});


/**
 * This get method renders graph by agency NSF and NASA division
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/agencyGraph', function (req, res) {
	univ.allUnivGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/agencyGraph.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	});
});


/**
 * This get method renders graph by agency NSF and NASA division
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/agencyGraphOverYears', function (req, res) {
	univ.allUnivGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/agencyGraphOverYears.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	});
});

/**
 * This get method renders graph according to location
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/cityGraph', function (req, res) {
	univ.cityGraph(function(err,results){
		if(err){
			throw err;
		}else{
			ejs.renderFile('./views/cityGraph.ejs',
					{title : title, data : data, output1 : results},	//sending results to user
					function(err, result) {
				// render on success
				if (!err) {
					//res.send(t);
					console.log("value=" + results);
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	});
});


app.get('/services', function(req, res, results) {
	ejs.renderFile('./views/services.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});

app.get('/about', function(req, res, results) {
	ejs.renderFile('./views/about.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});

app.get('/contacts', function(req, res, results) {
	ejs.renderFile('./views/contacts.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
