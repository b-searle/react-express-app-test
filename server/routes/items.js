module.exports = function (app) {
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

  app.route('/api/items')
    .get(function(req, res) {
      res.send(items);
    })
    .post(function(req, res) {
      var newItem = req.body;
      items.push(newItem);
    });
}
