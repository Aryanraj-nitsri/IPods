import React, { Component } from "react";
import "./Screen.css";

export default class Screen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      cover,
      music,
      games,
      settings,
      songs,
      play,
      counter,
      musicList,
      bgmList,
    } = this.props;
    return (
      <div id="screen_container">
        {cover && games && settings && music ? (
          <div id="screen_menu">
            <h1>iPod.js</h1>
            <div id="screen_list">
              <li className="active" data-target="cover">
                Cover Flow{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li data-target="music">
                Music{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>{" "}
              </li>

              <li data-target="games">
                Games{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li data-target="setting">
                Setting{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </li>
            </div>
          </div>
        ) : games && settings && music ? (
          <div id="cover">
            <h1>Cover Flow</h1>
          </div>
        ) : settings && music ? (
          <div id="games"></div>
        ) : music ? (
          <div id="settings"></div>
        ) : songs ? (
          <div id="music">
            <div id="screen_menu">
              <h1>Music</h1>
              <div id="screen_list">
                <li className="active" data-target="songs">
                  All Songs{" "}
                  <span>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </li>
                <li>
                  Artists{" "}
                  <span>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </li>
                <li>
                  Albums
                  <span>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </li>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="songs"
            style={{
              backgroundImage: `url(${bgmList[counter]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <audio src={musicList[counter]}></audio>
            <div id="controls">
              {!play ? (
                <i className="fa-solid fa-play"></i>
              ) : (
                <i className="fa-solid fa-pause"></i>
              )}
              <span id="current">0:00</span>
              <input type="range" />
              <span id="duration">0:00</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
