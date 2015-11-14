var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var insertDocument = function(db, callback) {
  db.collection('restaurants').insertOne({
    "address" : {
      "street" : "2 Avenue",
      "zipcode" : "10075",
      "building" : "1480",
      "coord" : [ -73.9557413, 40.7720266 ],
    },
    "borough" : "Manhattan",
    "cuisine" : "Italian",
    "grades" : [
      {
        "date" : new Date("2014-10-01T00:00:00Z"),
        "grade" : "A",
        "score" : 11
      },
      {
        "date" : new Date("2014-01-16T00:00:00Z"),
        "grade" : "B",
        "score" : 17
      }
    ],
    "name" : "Vella",
    "restaurant_id" : "41704620"
  }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback(result);
  });
};
var findRestaurants = function(db, callback) {
  var cursor = db.collection('restaurants').find( { "borough": "Queens" } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
    } else {
      callback();
    }
  });
};
var updateRestaurants = function(db, callback) {
  db.collection('restaurants').updateMany(
    { "address.zipcode": "10016", cuisine: "Other" },
    {
      $set: { cuisine: "Category To Be Determined" },
      $currentDate: { "lastModified": true }
    }
    ,
    function(err, results) {
      console.log(results);
      callback();
    });
};
var removeRestaurants = function(db, callback) {
  db.collection('restaurants').deleteMany( {}, function(err, results) {
    console.log(results);
    callback();
  });
};
var dropRestaurants = function(db, callback) {
  db.collection('restaurants').drop( function(err, response) {
    console.log(response);
    callback();
  });
};
var aggregateRestaurants = function(db, callback) {
  db.collection('restaurants').aggregate(
    [
      { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
      { $group: { "_id": "$name" , "count": { $sum: 1 } } }
    ]).toArray(function(err, result) {
      assert.equal(err, null);
      console.log(result);
      callback(result);
    }
  );
};
var indexRestaurants = function(db, callback) {
  db.collection('restaurants').createIndex(
    { "cuisine": 1, "address.zipcode": -1 },
    null,
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var cursor = db.collection('restaurants').find( {} );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
    } else {
      callback();
    }
  });
  db.close();
});