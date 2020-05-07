import React, {useState, useEffect} from "react";
import {sliderData} from "Pages/Home/Slider/constants";
import "Pages/Home/Slider/__styles__/Slider.scss";
import {SliderBackground} from "Pages/Home/Slider/__styles__/Slider.styled.js";

import HomeHeader from "Pages/Home/Header";
import HomeSliderSlide from "Pages/Home/Slider/Slide";

function HomeSlider() {
  let [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex(activeIndex < 1 ? sliderData.length - 1 : --activeIndex);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === sliderData.length - 1 ? 0 : ++activeIndex);
  };

  const setSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => nextSlide(), 7000);
    return () => {
      window.clearInterval(autoPlay);
    };
  });

  return (
    <section className="HomeSection">
      <HomeHeader></HomeHeader>
      <div className="HomeSlider" id="Slider">
        <div className="SliderBackgrounds">
          {sliderData.map((slide, index) => {
            return (<SliderBackground key={slide.id} index={index} activeindex={activeIndex} image={slide.image} />);
          })}
        </div>
        <section className="SliderWrapper">
          <div className="SlidesList" aria-live="off">
            {sliderData.map((slide, index) => {
              return (
                <HomeSliderSlide
                  key={slide.id}
                  index={index}
                  activeindex={activeIndex}
                  title={slide.title}
                  desc={slide.desc}
                  numOfSlides={sliderData.length}/>
              );
            })}
          </div>
          <div>
            <button onClick={previousSlide} className="Arrow Arrow-left" aria-controls="Slider" aria-label="Previous slide"></button>
            <button onClick={nextSlide} className="Arrow Arrow-right" aria-controls="Slider" aria-label="Next slide"></button>
          </div>
        </section>
        <footer className="SliderIndicators">
          <ul className="SliderIndicators-list">
            {sliderData.map((slide, index) => {
              return (
                <li key={slide.id}>
                  <button
                    onClick={() => setSlide(index)}
                    className={`SliderIndicator-dot ${index === activeIndex ? "SliderIndicator-dot--active" : ""}`}
                    aria-controls="Slider"
                    aria-label={`Jump to slide: ${index + 1}`}>
                  </button>
                </li>
              );
            })}
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default HomeSlider;
