import React, { Component } from "react";
import "./styles/TabedSlider.css";

class TabedSlider extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // Vars
    this.interval = null;

    // State Object
    this.state = {
      index: 0,
      count: 0,
    };

    // Binding Methods
  }
  autoNavigateSlider = () => {
    this.interval = setInterval(() => {
      this.setState(
        {
          index:
            this.state.index === this.state.count - 1
              ? 0
              : this.state.index + 1,
        },
        () => {
          this.navigateSlider(
            this.getElementOf(this.state.index, "tabed-slider-title").innerText
          );
        }
      );
    }, 15000);
  };
  3;
  navigateSlider = (title, i = undefined, alone = false) => {
    if (alone) {
      clearInterval(this.interval);
      this.autoNavigateSlider(title);
    }
    let index = i ? i : this.getIndexOf(title, "tabed-slider-title");
    this.setState({ index: index });
    this.setIndicator(title);
  };
  getIndexOf = (title, elementClass) => {
    let current = this.rootRef.current;
    let elements = current.querySelectorAll(`.${elementClass}`);
    let index = -1;
    for (let element of elements) {
      index++;
      if (element.innerText === title.toUpperCase()) break;
    }
    return index;
  };
  getElementOf = (index, elementClass) => {
    let current = this.rootRef.current;
    let elements = current.querySelectorAll(`.${elementClass}`);
    let i = -1;
    let el = null;
    for (let element of elements) {
      i++;
      if (index === i) {
        el = element;
        break;
      }
    }
    return el;
  };
  setIndicator = (title) => {
    let current = this.rootRef.current;
    let titles = current.querySelectorAll(".tabed-slider-title");
    let header = current.querySelector(".tabed-slider-header");
    let indicator = current.querySelector(".tabed-slider-indicator");
    let indicatorBg = current.querySelector(".tabed-slider-indicator-bg");
    let headerPos = header.getBoundingClientRect();

    for (let t of titles) {
      if (t.innerText === title.toUpperCase()) {
        let titlePos = t.getBoundingClientRect();
        let left = titlePos.left - headerPos.left;
        indicator.style.transition = ".5s left";
        indicator.style.width = `0px`;
        setTimeout(() => {
          indicator.style.transition = ".5s left, 15s width";
          let width = t.clientWidth;
          indicator.style.left = `${left}px`;
          indicatorBg.style.left = `${left}px`;
          indicator.style.width = `${width}px`;
          indicatorBg.style.width = `${width}px`;
        }, 10);
        break;
      }
    }
  };
  setCount = () => {
    this.setState({ count: this.props.children.length });
  };
  initializeIndicator = () => {
    let element = this.getElementOf(0, "tabed-slider-title");
    let current = this.rootRef.current;
    let indicator = current.querySelector(".tabed-slider-indicator");
    let indicatorBg = current.querySelector(".tabed-slider-indicator-bg");
    let width = element.clientWidth;
    indicator.style.transition = ".5s left, 15s width";
    indicator.style.width = `${width}px`;
    indicatorBg.style.width = `${width}px`;
  };
  initialize = () => {
    this.initializeIndicator();
    this.setCount();
    this.autoNavigateSlider();
  };
  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <div
        className="TabedSlider"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <div className="tabed-slider-header">
          <div className="tabed-slider-indicator-bg"></div>
          <div className="tabed-slider-indicator"></div>
          {this.props.children.map((child, i) => {
            let title = child.props.title;
            return (
              <a
                className="tabed-slider-title"
                onClick={() => {
                  this.navigateSlider(title, undefined, true);
                }}
                href={`#${title.toLowerCase()}`}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className="tabed-slider-body">
          {this.props.children[this.state.index]}
        </div>
      </div>
    );
  }
}

export default TabedSlider;
