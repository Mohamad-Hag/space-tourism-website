import React, { Component } from "react";
import "./styles/DotedSliderItem.css";

class DotedSliderItem extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  restartAnimations = () => {
    let current = this.rootRef.current;
    let img = current.querySelector(".doted-slider-item-right img");
    let left = current.querySelector(".doted-slider-item-left");    

    // A: Animation
    let imgA = getComputedStyle(img).getPropertyValue("animation-name");
    let leftA = getComputedStyle(left).getPropertyValue("animation-name");    

    img.style.animationName = "none";
    left.style.animationName = "none";    
    setTimeout(() => {
      img.style.animationName = imgA;
      left.style.animationName = leftA;      
    }, 100);
  };
  componentDidUpdate() {
    this.restartAnimations();
  }
  componentDidMount() {}
  render() {
    return (
      <div
        className="DotedSliderItem"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="doted-slider-item-left">
          <span className="doted-slider-item-career">{this.props.career}</span>
          <label className="doted-slider-item-name">{this.props.name}</label>
          <p className="doted-slider-item-description">
            {this.props.description}
          </p>
        </div>
        <div className="doted-slider-item-right">
          <img alt="" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default DotedSliderItem;
