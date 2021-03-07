import React, { useEffect, useRef } from "react";
import { TimelineMax } from "gsap";

const Hero = () => {
  const animate = new TimelineMax({ paused: true });
  const heroSecondaryImage = useRef(null);
  const heroImage = useRef(null);
  const heroText = useRef(null);

  useEffect(() => {
    animate
      .fromTo(
        heroImage.current,
        1,
        { opacity: 0, ease: "easeIn" },
        { opacity: 1 },
        "+=1"
      )
      .fromTo(
        heroSecondaryImage.current,
        1,
        { opacity: 0, ease: "easeIn" },
        { opacity: 1 },
        "-=.5"
      )
      .fromTo(
        heroText.current,
        1.5,
        { opacity: 0, x: -100, duration: 0.75 },
        { opacity: 1, x: 0 }
      )

      .play();
  });
  return (
    <section className="hero">
      <div ref={heroText}>
        <h1>You move out, we clean up.</h1>
        <p>The simplest way to get your bond back. Guaranteed.</p>
      </div>
      <div className="hero-image">
        <img
          ref={heroImage}
          src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/hero-background-homepage.svg"
          alt=""
        />
      </div>
      <img
        ref={heroSecondaryImage}
        className="hero-secondary-img"
        src="https://thisisneat.com.au/wp-content/uploads/2020/01/bond-cleaning-customers.svg"
        alt=""
      />
    </section>
  );
};

export default Hero;
