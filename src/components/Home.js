import React from "react";
import anime from "animejs";
import $ from "jquery";

class Home extends React.Component {
  componentDidMount() {
    $("#intro-headline").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([A-Za-z!-~]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    anime.timeline().add({
      targets: "#intro-headline .letter",
      translateY: [-300, 0],
      easing: "easeOutExpo",
      duration: 3000,
      delay: function(el, i) {
        return 75 * i;
      }
    });
  }

  render() {
    return (
      <div id="intro" className="animated fadeIn">
        <div id="intro-headline">
          <h1>Hello, my name is Chen!</h1>
        </div>

        <h4 id="intro-line-one">
          I'm a Full-Stack Web Developer and Machine Learning Enthusiast
        </h4>

        <h4 id="intro-line-two">
          ...and I want to build something cool with you!
        </h4>
      </div>
    );
  }
}

export default Home;
