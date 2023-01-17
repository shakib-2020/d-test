import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section>
        <div className="hero-area mt-200 text-center mb-200">
          <div className="hero-title">
            <h1>Free Driving Theory Test</h1>
          </div>
          <div className="hero-text">
            <p>
              These 15 mock tests cover the entire 2022 official DVSA revision
              bank. Like the real theory test, each mock is 57 minutes long and
              the pass mark is 43 out of 50. Questions are randomly selected
              from 14 topics. You also have the option of practicing in “test
              view” which closely resembles the real theory test.
            </p>
          </div>
          <div className="hero-btn">
            <a className="btn" href="">
              Practice Test
            </a>
            <a className="btn" href="">
              Progress
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
