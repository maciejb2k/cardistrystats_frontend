import React from "react";
import "Pages/Home/Slider/Slide/Slide.scss";

function HomeSliderSlide(props) {
  return (
    <section
      className={`Slide container animated ${props.index === props.activeindex ? "Slide--active fadeInLeft" : "fadeOutLeft"}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${props.index + 1} of ${props.numOfSlides}`}>
      <div className="Slide-text">
        <h2 className="Slide-title">{props.title}</h2>
        <p className="Slide-desc">{props.desc}</p>
        <button className="Slide-button">Learn More</button>
      </div>
    </section>
  );
}

export default HomeSliderSlide;
