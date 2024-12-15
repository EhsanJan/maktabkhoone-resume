import React from "react";
import { Component } from "react";
import data from "../data.json";
import FullPage from "../components/FullPage";

class Skills extends Component {
  render() {
    return (
      <FullPage id="SkillPage" className="f3">
        <h1>{data.sections[1].title}</h1>
        <div className="skill-container">
          {data.sections[1].items.map((skill) => {
            return (
              <div className="skill-box">
                <h2>{skill.content.title}</h2>
                <span className={skill.content.title}></span>
              </div>
            );
          })}
        </div>
      </FullPage>
    );
  }
}

export default Skills;
