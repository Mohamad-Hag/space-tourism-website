import React, { Component } from "react";
import "./styles/TabedSliderItem.css";

class TabedSliderItem extends Component {
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
    let img = current.querySelector(".tabed-slider-item-img");
    let title = current.querySelector(".tabed-slider-item-title");
    let description = current.querySelector(".tabed-slider-item-description");
    let details = current.querySelector(".tabed-slider-item-details");
    let separator = current.querySelector(".tabed-slider-item-separator");

    // A: Animation
    let imgA = getComputedStyle(img).getPropertyValue("animation-name");
    let titleA = getComputedStyle(title).getPropertyValue("animation-name");
    let descriptionA =
      getComputedStyle(description).getPropertyValue("animation-name");
    let detailsA = getComputedStyle(details).getPropertyValue("animation-name");
    let separatorA =
      getComputedStyle(separator).getPropertyValue("animation-name");

    img.style.animationName = "none";
    title.style.animationName = "none";
    description.style.animationName = "none";
    details.style.animationName = "none";
    separator.style.animationName = "none";
    setTimeout(() => {
      img.style.animationName = imgA;
      title.style.animationName = titleA;
      description.style.animationName = descriptionA;
      details.style.animationName = detailsA;
      separator.style.animationName = separatorA;
    }, 100);
  };
  componentDidMount() {}
  componentDidUpdate() {
    this.restartAnimations();
  }
  render() {
    return (
      <div
        className="TabedSliderItem"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <img className="tabed-slider-item-img" alt="" src={this.props.image} />
        <div className="tabed-slider-item-right">
          <label className="tabed-slider-item-title">{this.props.title}</label>
          <p className="tabed-slider-item-description">
            {this.props.description}
          </p>
          <hr className="tabed-slider-item-separator" />
          <div className="tabed-slider-item-details">
            <div className="tabed-slider-item-distance">
              <span>Avg. distance</span>
              <p>{this.props.distance}</p>
            </div>
            <div className="tabed-slider-item-time">
              <span>Est. travel time</span>
              <p>{this.props.time}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabedSliderItem;
