var React = require("react");

var DisplayAll = React.createClass({

    getInitialState: function() {
        return {        
            quote: ""
        };
    },

    render: function() {

        return ( 
            <div>Here are all of my quotes from the database</div>

        );
    }

});

module.exports = DisplayAll;
