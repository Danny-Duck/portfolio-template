import React, { Component } from "react";

export default class Post extends Component {
  colours = ["#f8c291", "#fad390", "#6a89cc", "#82ccdd", "#b8e994", "#cf6a87", "#f8a5c2"]
  render() {
    console.log(this.props);
    return (
      <div id="post">
        <div style={{backgroundColor: this.colours[Math.floor(Math.random()*this.colours.length)]}}id="photo"></div>
        <p id="title">{this.props.title}</p>
        <p id="desc">{this.props.desc}</p>
      </div>
    );
  }
}
