import React, { Component } from "react";
import "./styles/NumberedSliderItem.css";

class NumberedSliderItem extends Component {
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
        className="NumberedSliderItem"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="numbered-slider-item-left">
          <span>The Terminology...</span>
          <label className="numbered-slider-item-title">
            {this.props.title}
          </label>
          <p className="numbered-slider-item-description ">{this.props.description}</p>
        </div>
        <div className="numbered-slider-item-right">
          <img alt="No Image" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default NumberedSliderItem;
