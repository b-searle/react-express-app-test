var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');


var initial = [{
  name: "ice cream"
}, {
  name: "waffles"
},{
  name: "candy",
  purchased: true
},{
  name: "pepsi"
}];

ReactDOM.render(<GroceryItemList items={initial} />, app);
