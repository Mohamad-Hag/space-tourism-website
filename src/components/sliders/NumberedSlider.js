import React, { Component } from "react";
import "./styles/NumberedSlider.css";

class NumberedSlider extends Component {
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
    let index = this.state.index === this.count - 1 ? 0 : this.state.index + 1;
    let numbers = document.querySelectorAll(".numbered-slider-number");

    this.setState({ index: index }, () => {
      for (let number of numbers)
        if (number.classList.contains("numbered-slider-number-active"))
          number.classList.remove("numbered-slider-number-active");
    });
    numbers[index].classList.add("numbered-slider-number-active");
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  restartAnimations = () => {
    let current = this.rootRef.current;
    let item = current.querySelector(".NumberedSliderItem");    

    // A: Animation
    let itemA = getComputedStyle(item).getPropertyValue("animation-name");    

    item.style.animationName = "none";    
    setTimeout(() => {
      item.style.animationName = itemA;      
    }, 100);
  };
  componentDidUpdate()
  {
      this.restartAnimations();
  }
  componentDidMount() {
    this.autoNavigateSlider();
  }
  render() {
    return (
      <div
        className="NumberedSlider"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="numbered-slider-left">
          {this.props.children.map((child, i) => {
            return (
              <span
                className={`numbered-slider-number ${
                  i === 0 ? "numbered-slider-number-active" : null
                }`}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
        <div className="numbered-slider-right">
          {this.props.children[this.state.index]}
        </div>
      </div>
    );
  }
}

export default NumberedSlider;
