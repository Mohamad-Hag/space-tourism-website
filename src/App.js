import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Crew from "./components/pages/Crew";
import Destination from "./components/pages/Destination";
import Technology from "./components/pages/Technology";
import Header from "./components/fixtures/Header";
import { PropTypes } from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  static propTypes = {
    location: PropTypes.isRequired,
  };
  componentDidMount() {}
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onRouteChanged = () => {
    alert();
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact component path="/">
              <Home />
            </Route>
            <Route exact component path="/destination">
              <Destination />
            </Route>
            <Route exact component path="/crew">
              <Crew />
            </Route>
            <Route exact component path="/technology">
              <Technology />
            </Route>
            <Route>
              <div className="NotFound">404 Not Found</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
