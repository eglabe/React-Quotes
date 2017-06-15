// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var DisplayAll = require("./Quotes/DisplayAll");
var InputNew = require("./Quotes/InputNew");

// Create the Search component
var Quotes = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for manipulation by the children components
  // Also note the "results" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
//   setQuery: function(newQuery, newStart, newEnd) {
//     helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
//       this.setState({ results: { docs: data.docs } });
//     }.bind(this));
//   },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">

        <InputNew />
        <DisplayAll />

      </div>
    );
  }
});

// Export the module back to the route
module.exports = Quotes;
