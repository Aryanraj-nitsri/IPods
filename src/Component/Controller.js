import React, { Component } from "react";
import "./Controller.css";
import ZingTouch from "zingtouch";

export default class Controller extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    var element = document.getElementById("controller");

    var activeRegion = new ZingTouch.Region(element);
    activeRegion.bind(element, "rotate", function (e) {
      //Perform Operations
      let Lists = document.querySelectorAll("#screen_list li");
      let angle = Math.abs(Math.floor(e.detail.distanceFromOrigin));
      if (angle > 0 && angle <= 45) {
        Lists[0].classList.add("active");
        Lists[1].classList.remove("active");
        Lists[2].classList.remove("active");

        Lists[3].classList.remove("active");
      } else if (angle > 45 && angle <= 90) {
        Lists[0].classList.remove("active");
        Lists[1].classList.add("active");
        Lists[2].classList.remove("active");
      } else if (angle > 90 && angle <= 135) {
        Lists[0].classList.remove("active");

        Lists[1].classList.remove("active");
        Lists[2].classList.add("active");
        Lists[3].classList.remove("active");
        
      } else if (angle > 135 && angle <= 180) {
        if (Lists[3] ) {
          Lists[0].classList.remove("active");
          Lists[1].classList.remove("active");
          Lists[2].classList.remove("active");
          Lists[3].classList.add("active");
        }
      }
    });
  }

  render() {
    return (
      <div id="container">
        <div id="controller" draggable="false">
          <div id="box-1" className="box" onClick={this.props.handleForward}>
            <i className="fa-solid fa-forward"></i>
          </div>
          <div id="box-2" className="box" onClick={this.props.handleBackward}>
            <i className="fa-solid fa-backward"></i>
          </div>
          <div
            id="box-3"
            className="box"
            onClick={() => !this.props.songs && this.props.handlePlay()}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/7960/7960808.png"
              alt=""
            />
          </div>
          <div id="box-4" className="box" onClick={this.props.handleMenu}>
            <span>Menu</span>
          </div>
        </div>

        <div
          id="box-5"
          className="box"
          onClick={() =>
            this.props.songs &&
            this.props.cover &&
            this.props.games &&
            this.props.settings &&
            this.props.handleClick()
          }
        ></div>
      </div>
    );
  }
}
