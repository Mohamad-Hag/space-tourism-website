import React, { Component } from "react";
import DotedSlider from "../sliders/DotedSlider";
import DotedSliderItem from "../sliders/DotedSliderItem";
import "./styles/Crew.css";

class Crew extends Component {
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
        className="Crew"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <p className="crew-title">
          <span>02</span> Meet your crew
        </p>
        <DotedSlider>
          <DotedSliderItem
            career="Mission Specialist"
            name="Mark Shuttleworth"
            description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            image={
              require("../../assets/crew/image-mark-shuttleworth.png").default
            }
          />
          <DotedSliderItem
            career="Pilot"
            name="Victor Glover"
            description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
            image={require("../../assets/crew/image-victor-glover.png").default}
          />
          <DotedSliderItem
            career="Flight Engineer"
            name="Anousheh Ansari"
            description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            image={
              require("../../assets/crew/image-anousheh-ansari.png").default
            }
          />
          <DotedSliderItem
            career="Commander"
            name="Douglas Hurley"
            description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            image={
              require("../../assets/crew/image-douglas-hurley.png").default
            }
          />
        </DotedSlider>
      </div>
    );
  }
}

export default Crew;
