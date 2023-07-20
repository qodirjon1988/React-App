import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    btnDisabled: false,
    interval: "",
    intervalStorage: [],
  };

  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });

    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: this.state.second + 1,
        });
      }
    }, 1000);

    this.setState({
      interval: timer,
    });

    if (this.state.btnDisabled === false) {
      document.querySelector(".btn").style.cssText +=
        "opacity: 0.4; cursor: not-allowed";
    } else {
      document.querySelector(".btn").style.cssText +=
        "opacity: 1; cursor: pointer";
    }
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });

    if (this.state.btnDisabled === false) {
      document.querySelector(".btn").style.cssText +=
        "opacity: 0.4; cursor: not-allowed";
    } else {
      document.querySelector(".btn").style.cssText +=
        "opacity: 1; cursor: pointer";
    }
  };

  intervalClicked = () => {
    const { hour, minute, second, intervalStorage } = this.state;
    intervalStorage.push(`${hour}:${minute}:${second}`);

    this.setState({
      intervalStorage,
    });
  };

  resetClicked = () => {
    this.stopClicked();
    // const { second, minute, hour, btnDisabled } = this.state;
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      btnDisabled: false,
    });
  };
  render() {
    const { second, minute, hour, btnDisabled, intervalStorage } = this.state;
    return (
      <div>
        <div className="main_box clock_box">
          <h1>
            <span>Online</span> Stopwatch
          </h1>
          <div className="clock_box_wrapper">
            <div className="hour">
              <h2>{hour}</h2>
              <label htmlFor="">Hours</label>
            </div>
            <div className="minute">
              <h2>{minute}</h2>
              <label htmlFor="">Minutes</label>
            </div>
            <div className="second">
              <h2>{second}</h2>
              <label htmlFor="">Seconds</label>
            </div>
          </div>
        </div>

        <div className="main_box btn_box">
          <button
            onClick={this.startClicked}
            className="btn btn_start"
            disabled={btnDisabled}
          >
            Start
          </button>
          <button onClick={this.stopClicked} className="btn btn_stop">
            Stop
          </button>
          <button
            onClick={this.intervalClicked}
            className="btn btn_interval"
            disabled={!btnDisabled}
          >
            Interval
          </button>
          <button onClick={this.resetClicked} className="btn btn_reset">
            Reset
          </button>
        </div>

        <div className="main_box interval_box">
          {intervalStorage.map((item, inx) => (
            <div>
              <p>
                {inx + 1}. {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
