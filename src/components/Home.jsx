import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import Logo from "./Logo";
import NavBar from "./NavBar";
import QouteBtn from "./QouteBtn";
import { TimelineMax } from "gsap";

const Home = () => {
  const animate = new TimelineMax({ paused: true });
  const header = useRef(null);
  useEffect(() => {
    animate.fromTo(header.current, 1.5, { y: "-100%" }, { y: 0 }).play();
  });
  return (
    <main>
      <header className="header" ref={header}>
        <Logo />
        <NavBar />
        <QouteBtn />
      </header>
      <>
        <Hero />
      </>
    </main>
  );
};

export default Home;
