import React from "react";
import { Component } from "react";
import { SocialIcon } from "react-social-icons";
import data from "../data.json";
import FullPage from "../components/FullPage";

class FirstPage extends Component {
  render() {
    return (
      <FullPage id="FirstPage" className="f1">
        <h1 className="title">{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div className="icon-wrapper">
          {Object.keys(data.link).map((key) => {
            return (
              <SocialIcon className="icon" network={key} url={data.link[key]} />
            );
          })}
        </div>
      </FullPage>
    );
  }
}

export default FirstPage;
