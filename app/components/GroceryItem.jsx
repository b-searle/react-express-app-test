var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
      <input type="checkbox" checked={this.props.item.purchased} />
      <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
      </div>
    );
  }
});
