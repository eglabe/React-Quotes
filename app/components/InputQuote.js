var React = require("react");

var inputQuote = React.createClass({

    getInitialState: function() {
        return {
            quote: ""
        };
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

                        <div className="panel panel-primary">
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
                                        <h4 className=""><strong>Quote</strong></h4>
                                        <input
                                        type="text"
                                        value={this.state.quote}
                                        className="form-control"
                                        id="quoteInput"
                                        onChange={this.handleChange}
                                        required
                                        />

                                    </div>

                                    {/* Here we create the onClick event that triggers the HandleSubmit */}
                                    <div className="pull-right">
                                        <button
                                        type="submit"
                                        className="btn btn-success"
                                        >
                                        <h4>Submit</h4>
                                        </button>
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

module.exports = InputQuote;
