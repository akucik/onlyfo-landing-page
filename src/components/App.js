import React, { useState } from "react";
import "../styles/App.css";
import Countdown from "./Countdown";
import Logo from "./Logo";
import logo from "../img/logo.svg";
import Title from "./Title";
import Description from "./Description";
import Subscribe from "./Subscribe";

const App = () => {
  const [state, setState] = useState({
    countdown: {
      countdownDate: "2022-12-31 00:00:00",
    },
    logo: {
      alt: "company logo",
      src: logo,
      spinSpeed: "slow",
    },
    title: {
      text: "Coming Soon!",
    },
    description: {
      // text: "OnlyfO is NFT Marker Place for photographers.",
      text:
        "Start your own venture!. Turn your photos into NFT and sell it on OnlyfO.",
    },
    subscribe: {
      placeholder: "Enter your email",
      // btnTxt: "Notify Me!",
    },
  });
  const changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        setState({ logo });
      }, 1000);
    });
  };

  return (
    <div className="background">
      <Countdown countdownDate={state.countdown.countdownDate} />
      <Logo
        alt={state.logo.alt}
        src={state.logo.src}
        spinSpeed={state.logo.spinSpeed}
      />
      <Title text={state.title.text} />
      <Description text={state.description.text} />
      <Subscribe
        changeLogoSpeed={changeLogoSpeed}
        placeholder={state.subscribe.placeholder}
      />
    </div>
  );
};

export default App;
