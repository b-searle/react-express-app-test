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

  app.route('/api/items/:id')
    .delete(function(req, res) {
      GroceryItem.find({
        _id: req.params.id
      }).remove();
      res.status(200).send();
    }),
    .patch(function(req, res) {
      GroceryItem.findOne({
        _id: req.body._id
      }, function(error, doc) {
        for(var key in req.body) {
          doc[key] = req[key];
        }
        doc.save();
        res.status(200).send();
      });
    })
}
