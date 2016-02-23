var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {
            this.props.items.map(function(item, index) {
              return (
                <div>
                <input type="checkbox" checked={item.purchased} />
                {item.name}
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
});
