var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function() {
  console.log("connection successful");

  // Hack to avoid database duplication. Throws away all benefits of a DB though.
  mongoose.connection.db.dropDatabase();

  var items = [{
    name: "ice cream"
  }, {
    name: "waffles"
  },{
    name: "candy",
    purchased: true
  },{
    name: "pepsi"
  }];

  items.forEach(function(item) {
    new GroceryItem(item).save();
  });
});
