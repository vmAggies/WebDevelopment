
/*
 * GET users listing.
 */

/**
 * New node file
 */
var mongodb = require('mongodb');
url='mongodb://admin:admin@oceanic.mongohq.com:10021/Database-272'
	
var db;

function createGraph(callback, value)
{ 
//The 10056 is the port!
db = new mongodb.Db('Database-272', new mongodb.Server('oceanic.mongohq.com', 10021, {auto_reconnect:true}), {});

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
    var collection1 = new mongodb.Collection(db, 'Program_2007');
    var collection2 = new mongodb.Collection(db, 'Program_2008');
    var collection3 = new mongodb.Collection(db, 'Program_2009');
    var collection4 = new mongodb.Collection(db, 'Program_2010');
    var collection5 = new mongodb.Collection(db, 'Program_2011');
    var collection6 = new mongodb.Collection(db, 'Program_2012');
    var collection7 = new mongodb.Collection(db, 'Program_2013');
    var results = [];
    
    
    
    var univ = "SAN JOSE STATE UNIVERSITY RESEARCH FOUNDATION";
    collection1.findOne({}, function (err, user) {
        var value = user.value;
        results.push(value);        
   
    collection2.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection3.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection4.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);   
  
    collection5.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection6.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection7.findOne({}, function (err, user) {
    	var value = user.value;
    	results.push(value);       
        callback(err,results);
    });
    });
    });});});});});
	   }   
  });
});
}


exports.createGraph = createGraph;