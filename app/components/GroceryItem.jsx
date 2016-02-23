var React = require('react');
var action = require('../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
  delete: function(e) {
    e.preventDefault();
    action.delete(this.props.item);
  },
  render: function() {
    return (
      <div>
        <input type="checkbox" checked={this.props.item.purchased} readOnly />
        <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
        <form className="three columns" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </div>
    );
  }
});
