import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "../components/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="FirstPage" smooth={true} duration={1000}>
                {" "}
                Intro{" "}
              </Link>
            </li>
            <li>
              <Link to="SecondPage" smooth={true} duration={1000}>
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="SkillPage" smooth={true} duration={1000}>
                {" "}
                My Skills{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
