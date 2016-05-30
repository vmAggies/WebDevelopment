
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
    var collection1 = new mongodb.Collection(db, 'total_funds_2007');
    var collection2 = new mongodb.Collection(db, 'total_funds_2008');
    var collection3 = new mongodb.Collection(db, 'total_funds_2009');
    var collection4 = new mongodb.Collection(db, 'total_funds_2010');
    var collection5 = new mongodb.Collection(db, 'total_funds_2011');
    var collection6 = new mongodb.Collection(db, 'total_funds_2012');
    var collection7 = new mongodb.Collection(db, 'total_funds_2013');
    var results = [];
    
    
    var univ = "SAN JOSE STATE UNIVERSITY RESEARCH FOUNDATION";
    collection1.findOne({"_id": univ}, function (err, user) {
        var value = user.value;
        results.push([2007, value]);        
   
    collection2.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2008, value]);        
    
    collection3.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2009, value]);        
    
    collection4.findOne({"_id": univ}, function (err, user) {
    	if(user)
    	{}
    	else
    		{   		
            results.push([2010, 0.0]);                  
    		}   
  
    collection5.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2011, value]);        
    
    collection6.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2012, value]);        
    
    collection7.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2013, value]);        
        callback(err,results);
    });
    });
    });});});});});
	   }   
  });
});
}


exports.createGraph = createGraph;