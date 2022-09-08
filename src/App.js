import "./App.css";
import React, { Component } from "react";

import Controller from "./Component/Controller";
import Screen from "./Component/Screen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cover: true,
      music: true,
      games: true,
      settings: true,
      songs: true,
      play: false,
      counter: 0,
      musicList: [
        "../../audio.mp3.mp3",
        "../../GOT.mp3",
        "../../bella.mp3",
        "../../Vikaram.mp3",
      ],
      bgmList: [
        "../../cold.jpg",
        "../../got.jpg",
        "../../money.jpg",
        "../../vikarm.jpg",
      ],
    };
  }
  // ..........................................................................
  // Handling menu button to got back to previous menu
  handleMenu = () => {
    if (!this.state.cover) {
      this.setState({
        cover: true,
      });
    } else if (!this.state.songs) {
      this.setState({
        songs: true,
      });
    } else if (!this.state.games) {
      console.log("games");
      this.setState({
        games: true,
      });
    } else if (!this.state.settings) {
      this.setState({
        settings: true,
      });
    } else if (!this.state.music) {
      this.setState({
        music: true,
      });
    }
  };
  // ..........................................................................
  // handling forward buttton of Controller for next music
  handleForward = () => {
    if (this.state.counter < 3) {
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        () => {
          this.setState({
            play: false,
          });
        }
      );
    } else if (this.state.counter >= 3) {
      this.setState({
        counter: 0,
      });
    }
  };
  // .........................................................................
  // this is handling to go back to previous music
  handleBackward = () => {
    if (this.state.counter > 0) {
      this.setState(
        {
          counter: this.state.counter - 1,
        },
        () => {
          this.setState({
            play: false,
          });
        }
      );
    }
  };
  // .......................................................................
  // this function controls music play and pause and it also controls screen
  handlePlay = (e) => {
    const dur_box = document.getElementById("duration");
    const audio = document.querySelector("#songs>audio");
    const input = document.querySelector("#controls input");

    const curr_box = document.getElementById("current");
    let duration = Math.floor(audio.duration);
    dur_box.innerText = `0:${duration}`;

    let id = setInterval(() => {
      let currentTime = Math.floor(audio.currentTime);
      curr_box.innerText = `0:${currentTime}`;
      input.value = `${(100 / duration) * currentTime}`;

      if (!this.state.play) {
        clearInterval(id);
      } else if (duration === currentTime) {
        this.setState(
          {
            play: !this.state.play,
          },
          () => {
            this.handleForward();
          }
        );

        clearInterval(id);
      }
    }, 1000);
    this.setState(
      {
        play: !this.state.play,
      },
      () => {
        this.state.play ? audio.play() : audio.pause();
      }
    );
  };
  // .....................................................................
  // below function is to control middle button to navigate
  handleClick = (e) => {
    let element = document.getElementsByClassName("active")[0];
    let value = element.getAttribute("data-target");

    if (value === "cover") {
      this.setState({
        cover: false,
      });
    } else if (value === "music") {
      this.setState({
        music: false,
      });
    } else if (value === "games") {
      this.setState({
        games: false,
      });
    } else if (value === "setting") {
      this.setState({
        settings: false,
      });
    } else if (value === "songs") {
      this.setState({
        songs: false,
      });
    }
  };

  render() {
    return (
      <div id="ipod_body">
        <Screen
          cover={this.state.cover}
          music={this.state.music}
          games={this.state.games}
          settings={this.state.settings}
          songs={this.state.songs}
          play={this.state.play}
          counter={this.state.counter}
          musicList={this.state.musicList}
          bgmList={this.state.bgmList}
        />
        <Controller
          handleClick={this.handleClick}
          handlePlay={this.handlePlay}
          handleBackward={this.handleBackward}
          handleForward={this.handleForward}
          handleMenu={this.handleMenu}
          songs={this.state.songs}
          cover={this.state.cover}
          games={this.state.games}
          settings={this.state.settings}



        />
      </div>
    );
  }
}

export default App;
