import React from "react";

function Hero() {
  return (
    <>
      <section>
        <div className="hero-area text-center mt-32 px-48 flex flex-col gap-6">
          <div className="hero-title">
            <h1 className="text-5xl">Free Driving Theory Test</h1>
          </div>
          <div className="hero-text text-base font-medium">
            <p>
              These 15 mock tests cover the entire 2022 official DVSA revision
              bank. Like the real theory test, each mock is 57 minutes long and
              the pass mark is 43 out of 50. Questions are randomly selected
              from 14 topics. You also have the option of practicing in “test
              view” which closely resembles the real theory test.
            </p>
          </div>
          <div className="mt-6">
            <a
              className="font-semibold px-8 py-4 bg-blue-700 text-white hover:bg-blue-400
                hover:text-black border-2 border-transparent transition duration-500 rounded-md ml-2 uppercase"
              href=""
            >
              Practice Test
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
