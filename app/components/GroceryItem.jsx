var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
      <input type="checkbox" checked={this.props.item.purchased} />
      {this.props.item.name}
      </div>
    );
  }
});
