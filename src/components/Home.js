import React from "react";
import anime from "animejs";
import $ from "jquery";

class Home extends React.Component {
  componentDidMount() {
    $("#intro-headline").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    anime.timeline().add({
      targets: "#intro-headline .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 2700,
      delay: function(el, i) {
        return 30 * i;
      }
    });
  }

  render() {
    return (
      <div id="intro">
        <div id="intro-headline">
          <h1 className="ml16">Hello my name is Chen</h1>
        </div>
        <h4>...and I'm a full-stack web developer</h4>
      </div>
    );
  }
}

export default Home;
