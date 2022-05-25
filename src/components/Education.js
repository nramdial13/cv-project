import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  taskHandler = (e) => {
    console.log("Clicked");
    e.preventDefault();
  };

  eventHandler = (e) => {
    console.log(this.state.name);
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.taskHandler}>
          <label>Enter School Name</label>
          <input
            type="text"
            value={name}
            onChange={this.eventHandler}
            id="taskInput"
          ></input>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default Education;
