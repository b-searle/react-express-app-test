var GroceryItem = require('../models/GroceryItem.js');

module.exports = function (app) {


  app.route('/api/items')
    .get(function(req, res) {
      GroceryItem.find(function(error, items) {
        res.send(items);
      });
    })
    .post(function(req, res) {
      new GroceryItem(req.body).save(function(err, data) {
        res.status(200).send();
      });
    });
}
