/**
 * New node file
 */
var mongodb = require('mongodb');
url='mongodb://admin:admin@oceanic.mongohq.com:10021/Database-272'
 

var db;
function temp(callback)
{ 
//The 10056 is the port!
db = new mongodb.Db('Database-272', new mongodb.Server('oceanic.mongohq.com', 10021, {auto_reconnect:true}), {});
 
db.open(function(err, p_client) {
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
    
    var collection = new mongodb.Collection(db, 'award_2010');
    var total_funds;
    var total_sample_data;
    
    	
    var mapFunction = function() {
        emit(this.Awardee, this.Funds);
    };
    var reduceFunction = function(key, value) {
        return Array.sum(value);
    };
    
    collection.mapReduce(
            mapFunction,
            reduceFunction,
            {  query: { Awardee: "SAN DIEGO STATE UNIVERSITY FOUNDATION" }, out: "DIEGO_2010" }, function(err, docs) {
                //In an array, this will log all your documents you added before we tested this
            	if (err) console.log(err);
            	console.log("funds  " + total_funds);
            	
            });    
    });
  });
}


exports.temp = temp;