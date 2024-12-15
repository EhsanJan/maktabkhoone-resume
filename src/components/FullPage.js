import { Component } from "react";
import React from "react";
import "./FullPage.css";

export default class FullPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        id={`${this.props.id}`}
        className={`fullpage ${this.props.className || ""}`}
      >
        {children}
      </div>
    );
  }
}
