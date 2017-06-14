var React = require("react");

// var InputNew = require("./Quotes/InputNew");

var Main = React.createClass({

  render: function() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">NYT-React</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/all">All Quotes</Link></li>
                  <li><Link to="/favs">Favorites</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>Quote Collection</strong></h2>
            <h3 className="text-center">View, Add, and Save Quotes</h3>
          </div>


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
});

module.exports = Main;
