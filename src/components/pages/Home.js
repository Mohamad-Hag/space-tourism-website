import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  componentDidMount() {}
  render() {
    return (
      <div
        className="Home"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="home-inner">
          <div className="home-left">
            <label>So, you Want to travel to</label>
            <span>Space</span>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home-right">
            <Link className="home-explore-btn" to="/destination">Explore</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
