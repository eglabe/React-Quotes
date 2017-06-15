var React = require("react");

var InputNew = React.createClass({

    getInitialState: function() {
        return {        
            quote: ""
        };
    },

  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    // this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  },

    render: function() {

        return ( 
            <div className="main-container">

                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                <strong>
                                    <i className="glyphicon glyphicon-pencil" aria-hidden="true"></i> Add a Quote
                                </strong>
                                </h1>
                            </div>
                            <div className="panel-body">

                                {/* Note how we associate the text-box inputs with the state values */}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" value={this.state.search} placeholder="To be or not to be..." className="form-control" id="search" onChange={this.handleChange} required/>

                                    </div>

                                    {/* Here we create the onClick event that triggers the HandleSubmit */}
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }

});

module.exports = InputNew;
