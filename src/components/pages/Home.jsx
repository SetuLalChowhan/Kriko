import React from "react";
import Banner from "../Home/Banner";
import { ServiceSection } from "../Home/ServiceSection";
import { ServiceWork } from "../Home/ServiceWork";
import Slider from "../Home/Slider";
import TrushUs from "../Home/TrushUs";
import PetBanner from "../Home/PetBanner";
import CountdownTimer from "../common/CountdownTimer";

export const Home = () => {
  const handleEnd = () => {
    alert("Countdown finished!");
  };
  return (
    <div>
      <Banner />
      <ServiceSection />
      <ServiceWork />
      <Slider />
      <TrushUs />
      <PetBanner />
      <CountdownTimer
        targetDate={new Date().getTime() + 5 * 24 * 60 * 60 * 1000} // 5 days from now
        onEnd={handleEnd}
        className="w-full max-w-md"
      />
    </div>
  );
};
