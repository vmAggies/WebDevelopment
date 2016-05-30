
/*
 * GET users listing.
 */

/**
 * New node file
 */
var mongodb = require('mongodb');
url='mongodb://admin:admin@oceanic.mongohq.com:10021/Database-272'
	
var db;
db = new mongodb.Db('Database-272', new mongodb.Server('oceanic.mongohq.com', 10021, {auto_reconnect:true}), {});


function createUnivGraph(callback, univ)
{ 
//The 10056 is the port!

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
	   /*univ values for diff univ:
	   SAN JOSE STATE UNIVERSITY FOUNDATION :  total_funds
	   CALIFORNIA INSTITUTE OF TECHNOLOGY : CALI
	   UNIVERSITY OF CALIFORNIA LOS ANGELES : LA
	   SAN DIEGO STATE UNIVERSITY FOUNDATION : DIEGO
	   SAN FRANCISCO STATE UNIVERSITY : SFSU
	   UNIVERSITY OF CALIFORNIA, SANTA BARBARA : BARBARA
	   LELAND STANFORD JUNIOR UNIVERSITY : STANFORD
	   UNIVERSITY OF CALIFORNIA, IRVINE : IRVINE
	   UNIVERSITY OF CALIFORNIA, SANTA CRUZ : CRUZ
	   UNIVERSITY OF SOUTHERN CALIFORNIA : SOUTH*/
	     
	   var collName1 = univ + "_2007";		
	   var collName2 = univ + "_2008";		
	   var collName3 = univ + "_2009";		
	   var collName4 = univ + "_2010";
	   var collName5 = univ + "_2011";
	   var collName6 = univ + "_2012";
	   var collName7 = univ + "_2013";
	    
    var collection1 = new mongodb.Collection(db, collName1);
    var collection2 = new mongodb.Collection(db, collName2);
    var collection3 = new mongodb.Collection(db, collName3);
    var collection4 = new mongodb.Collection(db, collName4);
    var collection5 = new mongodb.Collection(db, collName5);
    var collection6 = new mongodb.Collection(db, collName6);
    var collection7 = new mongodb.Collection(db, collName7);
    var results = [];
    
    if(univ === "total_funds")
		   univ = "SAN JOSE STATE UNIVERSITY FOUNDATION";
	   else if(univ === "CALI")
		   univ = "CALIFORNIA INSTITUTE OF TECHNOLOGY";
	   else if(univ === "LA")
		   univ = "UNIVERSITY OF CALIFORNIA LOS ANGELES";
	   else if(univ === "DIEGO")
		   univ = "SAN DIEGO STATE UNIVERSITY FOUNDATION";
	   else if(univ === "SFSU")
		   univ = "SAN FRANCISCO STATE UNIVERSITY";
	   else if(univ === "BARBARA")
		   univ = "UNIVERSITY OF CALIFORNIA, SANTA BARBARAN";
	   else if(univ === "STANFORD")
		   univ = "THE LELAND STANFORD JUNIOR UNIVERSITY";
	   else if(univ === "IRVINE")
		   univ = "UNIVERSITY OF CALIFORNIA, IRVINE";
	   else if(univ === "CRUZ")
		   univ = "UNIVERSITY OF CALIFORNIA, SANTA CRUZ";
	   else if(univ === "SOUTH")
		   univ = "UNIVERSITY OF SOUTHERN CALIFORNIA";
    
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
    	
    	results.push(univ);
        callback(err,results);
        
        db.close();
    });
    });
    });});});});});
	   }   
  });
});
}

// to compare between 2 university
function compareUnivGraph(callback, univ1, univ2)
{ 
//The 10056 is the port!

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
	   /*univ values for diff univ:
	   SAN JOSE STATE UNIVERSITY FOUNDATION :  total_funds
	   CALIFORNIA INSTITUTE OF TECHNOLOGY : CALI
	   UNIVERSITY OF CALIFORNIA LOS ANGELES : LA
	   SAN DIEGO STATE UNIVERSITY FOUNDATION : DIEGO
	   SAN FRANCISCO STATE UNIVERSITY : SFSU
	   UNIVERSITY OF CALIFORNIA, SANTA BARBARA : BARBARA
	   LELAND STANFORD JUNIOR UNIVERSITY : STANFORD
	   UNIVERSITY OF CALIFORNIA, IRVINE : IRVINE
	   UNIVERSITY OF CALIFORNIA, SANTA CRUZ : CRUZ
	   UNIVERSITY OF SOUTHERN CALIFORNIA : SOUTH*/
	   
	   
	   
	   
	   var collName1 = univ1 + "_2007";		
	   var collName2 = univ1 + "_2008";		
	   var collName3 = univ1 + "_2009";		
	   var collName4 = univ1 + "_2010";
	   var collName5 = univ1 + "_2011";
	   var collName6 = univ1 + "_2012";
	   var collName7 = univ1 + "_2013";
	   
	   var collName8 = univ2 + "_2007";		
	   var collName9 = univ2 + "_2008";		
	   var collName10 = univ2 + "_2009";		
	   var collName11 = univ2 + "_2010";
	   var collName12 = univ2 + "_2011";
	   var collName13 = univ2 + "_2012";
	   var collName14 = univ2 + "_2013";
	    
    var collection1 = new mongodb.Collection(db, collName1);
    var collection2 = new mongodb.Collection(db, collName2);
    var collection3 = new mongodb.Collection(db, collName3);
    var collection4 = new mongodb.Collection(db, collName4);
    var collection5 = new mongodb.Collection(db, collName5);
    var collection6 = new mongodb.Collection(db, collName6);
    var collection7 = new mongodb.Collection(db, collName7);
    
    var collection8 = new mongodb.Collection(db, collName8);
    var collection9 = new mongodb.Collection(db, collName9);
    var collection10 = new mongodb.Collection(db, collName10);
    var collection11 = new mongodb.Collection(db, collName11);
    var collection12 = new mongodb.Collection(db, collName12);
    var collection13 = new mongodb.Collection(db, collName13);
    var collection14 = new mongodb.Collection(db, collName14);
    var results = [];
    
    if(univ1 === "total_funds")
		   univ1 = "SAN JOSE STATE UNIVERSITY FOUNDATION";
	   else if(univ1 === "CALI")
		   univ1 = "CALIFORNIA INSTITUTE OF TECHNOLOGY";
	   else if(univ1 === "LA")
		   univ1 = "UNIVERSITY OF CALIFORNIA LOS ANGELES";
	   else if(univ1 === "DIEGO")
		   univ1 = "SAN DIEGO STATE UNIVERSITY FOUNDATION";
	   else if(univ1 === "SFSU")
		   univ1 = "SAN FRANCISCO STATE UNIVERSITY";
	   else if(univ1 === "BARBARA")
		   univ1 = "UNIVERSITY OF CALIFORNIA, SANTA BARBARAN";
	   else if(univ1 === "STANFORD")
		   univ1 = "THE LELAND STANFORD JUNIOR UNIVERSITY";
	   else if(univ1 === "IRVINE")
		   univ1 = "UNIVERSITY OF CALIFORNIA, IRVINE";
	   else if(univ1 === "CRUZ")
		   univ1 = "UNIVERSITY OF CALIFORNIA, SANTA CRUZ";
	   else if(univ1 === "SOUTH")
		   univ1 = "UNIVERSITY OF SOUTHERN CALIFORNIA";
	   
	   if(univ2 === "total_funds")
		   univ2 = "SAN JOSE STATE UNIVERSITY FOUNDATION";
	   else if(univ2 === "CALI")
		   univ2 = "CALIFORNIA INSTITUTE OF TECHNOLOGY";
	   else if(univ2 === "LA")
		   univ2 = "UNIVERSITY OF CALIFORNIA LOS ANGELES";
	   else if(univ2 === "DIEGO")
		   univ2 = "SAN DIEGO STATE UNIVERSITY FOUNDATION";
	   else if(univ2 === "SFSU")
		   univ2 = "SAN FRANCISCO STATE UNIVERSITY";
	   else if(univ2 === "BARBARA")
		   univ2 = "UNIVERSITY OF CALIFORNIA, SANTA BARBARAN";
	   else if(univ2 === "STANFORD")
		   univ2 = "THE LELAND STANFORD JUNIOR UNIVERSITY";
	   else if(univ2 === "IRVINE")
		   univ2 = "UNIVERSITY OF CALIFORNIA, IRVINE";
	   else if(univ2 === "CRUZ")
		   univ2 = "UNIVERSITY OF CALIFORNIA, SANTA CRUZ";
	   else if(univ2 === "SOUTH")
		   univ2 = "UNIVERSITY OF SOUTHERN CALIFORNIA";
	   
	   
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

    	
    	//getting univ2 data        
        collection8.findOne({}, function (err, user) {
            var value = user.value;
            results.push(value);        
       
        collection9.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection10.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection11.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);                      
      
        collection12.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection13.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection14.findOne({}, function (err, user) {
        	var value = user.value;
        	results.push(value);
        	
        	//sending univ names
        	results.push(univ1);
        	results.push(univ2);
        	
            callback(err,results);
            
        db.close();
    });
    });
    });});});});});});});});});});});});
	   }   
  });
});
}

//to create graphs for different programs
function createProgramGraph(callback)
{ 

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
    var collection1 = new mongodb.Collection(db, 'Program_2013');
    var results = [];
    
    collection1.findOne({"_id": "AERONOMY"}, function (err, user) {
        var value = user.value;
        results.push(value);        
   
    collection1.findOne({"_id": "APPLIED MATHEMATICS"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection1.findOne({"_id": "ATOMIC THEORY"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection1.findOne({"_id": "BIOMEDICAL ENGINEERING"}, function (err, user) {
    	var value = user.value;
    	results.push(value);   
  
    collection1.findOne({"_id": "COMPUTER SYSTEMS"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection1.findOne({"_id": "COMPUTATIONAL MATHEMATICS"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection1.findOne({"_id": "Data Infrastructure"}, function (err, user) {
    	var value = user.value;
    	results.push(value);
        
    	collection1.findOne({"_id": "ECONOMICS"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection1.findOne({"_id": "OPTICAL PHYSICS"}, function (err, user) {
        	var value = user.value;
        	results.push(value);   
      
        collection1.findOne({"_id": "POLITICAL SCIENCE"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection1.findOne({"_id": "SOCIOLOGY"}, function (err, user) {
        	var value = user.value;
        	results.push(value);         

        callback(err,results);
        
        db.close();
        
    });
    });
    });});});});});});});});});
	   }   
  });
});
}

// to create graph of all universities over the years
function allUnivGraph(callback, value)
{ 
//The 10056 is the port!

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
    var collection1 = new mongodb.Collection(db, 'NASA_2007');
    var collection2 = new mongodb.Collection(db, 'NASA_2008');
    var collection3 = new mongodb.Collection(db, 'NASA_2009');
    var collection4 = new mongodb.Collection(db, 'NASA_2010');
    var collection5 = new mongodb.Collection(db, 'NASA_2011');
    var collection6 = new mongodb.Collection(db, 'NASA_2012');
    var collection7 = new mongodb.Collection(db, 'NASA_2013');
    
    var collection8 = new mongodb.Collection(db, 'NSF_2007');
    var collection9 = new mongodb.Collection(db, 'NSF_2008');
    var collection10 = new mongodb.Collection(db, 'NSF_2009');
    var collection11 = new mongodb.Collection(db, 'NSF_2010');
    var collection12 = new mongodb.Collection(db, 'NSF_2011');
    var collection13 = new mongodb.Collection(db, 'NSF_2012');
    var collection14 = new mongodb.Collection(db, 'NSF_2013');
    var results = [];
    
    
    collection1.findOne({"_id": "NASA"}, function (err, user) {
        var value = user.value;
        results.push(value);        
   
    collection2.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection3.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection4.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);                      
  
    collection5.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection6.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection7.findOne({"_id": "NASA"}, function (err, user) {
    	var value = user.value;
    	results.push(value);       
   
//getting NSF data        
        collection8.findOne({"_id": "NSF"}, function (err, user) {
            var value = user.value;
            results.push(value);        
       
        collection9.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection10.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection11.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);                      
      
        collection12.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection13.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection14.findOne({"_id": "NSF"}, function (err, user) {
        	var value = user.value;
        	results.push(value);       
            callback(err,results);
            
        db.close();
    });
    });
    });});});});});});});});});});});});
	   }   
  });
});
}


function cityGraph(callback)
{ 
//The 10056 is the port!

db.open(function(err, p_client) {
	
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {

    var collection1 = new mongodb.Collection(db, "City_2013");
    var results = [];
    		
    collection1.findOne({"_id": "San Jose"}, function (err, user) {
        var value = user.value;
        results.push(value);        
   
    collection1.findOne({"_id": "San Diego"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection1.findOne({"_id": "Los Angeles"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection1.findOne({"_id": "Irvine"}, function (err, user) {
    	var value = user.value;
    	results.push(value);  
  
    collection1.findOne({"_id": "Santa Clara"}, function (err, user) {
    	var value = user.value;
    	results.push(value);        
    
    collection1.findOne({"_id": "Santa Cruz"}, function (err, user) {
    	var value = user.value;
    	results.push(value);         
    
    collection1.findOne({"_id": "Berkeley"}, function (err, user) {
    	var value = user.value;
    	results.push(value);       
        
        collection1.findOne({"_id": "Hayward"}, function (err, user) {
            var value = user.value;
            results.push(value);        
       
        collection1.findOne({"_id": "Oakland"}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection1.findOne({"_id": "Pittsburg"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection1.findOne({"_id": "Redwood City"}, function (err, user) {
        	var value = user.value;
        	results.push(value);  
      
        collection1.findOne({"_id": "Sacramento"}, function (err, user) {
        	var value = user.value;
        	results.push(value);        
        
        collection1.findOne({"_id": "San Francisco"}, function (err, user) {
        	var value = user.value;
        	results.push(value);         
        
        collection1.findOne({"_id": "Stanford"}, function (err, user) {
        	var value = user.value;
        	results.push(value);       
        
       collection1.findOne({"_id": "Richmond"}, function (err, user) {
          var value = user.value;
           results.push(value);       
           callback(err,results);
        
        db.close();
    });
    });
    });});});});}); });});});});});});});});
	   }   
  });
});
}

exports.allUnivGraph = allUnivGraph;
exports.createUnivGraph = createUnivGraph;
exports.createProgramGraph = createProgramGraph;
exports.compareUnivGraph = compareUnivGraph;
exports.cityGraph = cityGraph;

