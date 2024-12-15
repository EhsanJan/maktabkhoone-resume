import React from "react";
import { Component } from "react";
import data from "../data.json";
import FullPage from "../components/FullPage";
import { Element } from "react-scroll";

class SecondPage extends Component {
  render() {
    return (
      <FullPage id="SecondPage" className="f2 element" name="test1">
        <Element name="test1" className="element"></Element>
        <h1>{data.sections[0].title}</h1>
        <p>{data.sections[0].items[0].content}</p>
      </FullPage>
    );
  }
}

export default SecondPage;
