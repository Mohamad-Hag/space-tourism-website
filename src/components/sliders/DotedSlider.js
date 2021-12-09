import React, { Component } from "react";
import "./styles/DotedSlider.css";

class DotedSlider extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();
    this.count = this.props.children.length;
    this.interval = null;

    // State Object
    this.state = {
      index: 0,
    };

    // Binding Methods
  }
  autoNavigateSlider = () => {
    this.interval = setInterval(() => {
      this.navigateSlider();
    }, 5000);
  };
  navigateSlider = () => {
    let current = this.rootRef.current;
    let dots = document.querySelectorAll(".doted-slider-dot");
    let index = this.state.index === this.count - 1 ? 0 : this.state.index + 1;
    for (let dot of dots) {
      if (dot.classList.contains("doted-slider-dot-active"))
        dot.classList.remove("doted-slider-dot-active");
    }
    if (!dots[index]) return;
    dots[index].classList.add("doted-slider-dot-active");
    this.setState({ index: index });
  };
  componentDidMount() {
    this.autoNavigateSlider();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        className="DotedSlider"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="doted-slider-left">
          {this.props.children.map((child, i) => {
            return (
              <span
                className={`doted-slider-dot ${
                  i === 0 ? "doted-slider-dot-active" : null
                }`}
              ></span>
            );
          })}
        </div>
        <div className="doted-slider-right">
          {this.props.children[this.state.index]}
        </div>
      </div>
    );
  }
}

export default DotedSlider;
