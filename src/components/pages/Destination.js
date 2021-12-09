import React, { Component } from "react";
import TabedSlider from "../sliders/TabedSlider";
import TabedSliderItem from "../sliders/TabedSliderItem";
import "./styles/Destination.css";

class Destination extends Component {
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
        className="Destination"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <p className="destination-title">
          <span>01</span> Pick your destination
        </p>
        <TabedSlider>
          <TabedSliderItem
            title="Moon"
            description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            time="3 days"
            distance="384,400 km"
            image={require("../../assets/destination/image-moon.png").default}
          />
          <TabedSliderItem
            title="Mars"
            description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            time="9 months"
            distance="225 mil. km"
            image={require("../../assets/destination/image-mars.png").default}
          />
          <TabedSliderItem
            title="Europa"
            description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            time="3 years"
            distance="628 mil. km"
            image={require("../../assets/destination/image-europa.png").default}
          />
          <TabedSliderItem
            title="Titan"
            description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            time="7 years"
            distance="1.6 bil. km"
            image={require("../../assets/destination/image-titan.png").default}
          />
        </TabedSlider>
      </div>
    );
  }
}

export default Destination;
