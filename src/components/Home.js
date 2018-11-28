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

    $("#intro-line-one").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([A-Za-z!-~]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    $("#intro-line-two").each(function() {
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

    setTimeout(() => {
      anime.timeline().add({
        targets: "#intro-line-one .letter",
        translateY: ["700em", 0],
        translateX: ["700em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 1500,
        easing: "easeOutExpo",
        delay: function(el, i) {
          return 75 * i;
        }
      });
    }, 2700);

    setTimeout(() => {
      anime.timeline().add({
        targets: "#intro-line-two .letter",
        translateY: ["700em", 0],
        translateX: ["700em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 1500,
        easing: "easeOutExpo",
        delay: function(el, i) {
          return 75 * i;
        }
      });
    }, 7000);
  }

  render() {
    return (
      <div id="intro" className="animated fadeIn">
        <div id="intro-headline">
          <h1>Hello, my name is Chen!</h1>
        </div>

        <h4 id="intro-line-one">I'm a Freelance Full-Stack Web developer</h4>

        <h4 id="intro-line-two">
          ...and I want to build something cool with you!
        </h4>
      </div>
    );
  }
}

export default Home;
