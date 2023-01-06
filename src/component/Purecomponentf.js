import React, { Component, PureComponent } from "react";

class Purecomponentf extends PureComponent {
  state = {
    cityname: "Delhi",
  };
  changecityname = () => {
    this.setState({
      cityname: this.state.cityname,
    });
  };
  render() {
    console.log(this.state.cityname, "cityname");
    return (
      <>
        <div style={{ width: "40%", margin: "10px auto" }}>
          <button
            onClick={this.changecityname}
            style={{
              padding: "10px 25px",
              margin: "10px",
              backgroundColor: "green",
            }}
          >
            ChangeCity
          </button>
          <h2>{this.state.cityname}</h2>
        </div>
      </>
    );
  }
}
export default Purecomponentf;
