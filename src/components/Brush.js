import React, { Component } from "react";
import "../components/Brush.css";

export default class Brush extends Component {
  render() {
    let counter = 0;
    let flag = true;
    return (
      <div
        className="brush"
        onClick={() => {
          let f1 = document.getElementsByClassName("f1");
          let f2 = document.getElementsByClassName("f2");
          let f3 = document.getElementsByClassName("f3");
          if (counter == 3) {
            f1[0].style.backgroundColor = "#fcba03";
            f2[0].style.backgroundColor = "#4287f5";
            f3[0].style.backgroundColor = "#8390a6";
            if (!flag) {
              counter = 0;
              flag = true;
            } else {
              flag = false;
            }
          } else if (counter == 0 && flag) {
            f1[0].style.backgroundColor = "orange";
            f2[0].style.backgroundColor = "blue";
            f3[0].style.backgroundColor = "#929294";
            counter++;
          } else if (counter == 2) {
            f1[0].style.backgroundColor = "#e05a3f";
            f2[0].style.backgroundColor = "#3f3fe0";
            f3[0].style.backgroundColor = "#e8e8ed";
            counter++;
            flag = false;
          } else if (counter == 1) {
            f1[0].style.backgroundColor = "#e08d3f";
            f2[0].style.backgroundColor = "#3f7ae0";
            f3[0].style.backgroundColor = "#b1b1b3";
            counter++;
            flag = false;
          }
        }}
      />
    );
  }
}
