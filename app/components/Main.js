var React = require("react");

var InputQuote = require("./Quotes/InputNew");

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <InputNew />
      </div>
    )
  }
});// very basic component to get started
// const Main = () => (
//   <h1>Hello World!</h1>
//   <InputNew />
// );

module.exports = Main;
