import React from "react";

class Home extends React.Component {
  componentDidMount() {
    console.log("Home Component Mounted");
  }

  componentDidUpdate() {
    console.log("Home Component Updated");
  }

  render() {
    console.log("Home Component rendered");
    return (
      <React.Fragment>
        <h1>Home</h1>
      </React.Fragment>
    );
  }
}

export default Home;
