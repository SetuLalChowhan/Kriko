import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate, onEnd, className }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else if (onEnd) {
      onEnd();
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center justify-center mx-2 text-center"
      >
        <span className="text-2xl font-semibold text-gray-800">{timeLeft[interval]}</span>
        <span className="text-sm font-medium text-gray-500 uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div
      className={`flex items-center justify-center space-x-4 bg-white p-4 rounded-lg  ${className}`}
    >
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
