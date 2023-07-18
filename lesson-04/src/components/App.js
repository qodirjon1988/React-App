import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card text-center">
                <div className="card-header">
                  <h1>Counter 🤔</h1>
                </div>
                <div className="card-body">
                  <h2>{this.state.count}</h2>
                </div>

                <div className="card-footer">
                  <button
                    onClick={() => this.addOne(this.state.count + 1)}
                    className="btn btn-success"
                  >
                    Add +1
                  </button>
                  <button
                    onClick={() => this.addOne(0)}
                    className="btn btn-primary m-3"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => this.addOne(this.state.count - 1)}
                    className="btn btn-danger"
                  >
                    Del -1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
