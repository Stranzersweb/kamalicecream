"use client";
import React, { useState, useEffect } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const endOfYear = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const difference = endOfYear - now;

    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [timeLeft, setTimeLeft] = useState(0); // Initial state to prevent mismatch during hydration
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Update timeLeft once the component has mounted
    setMounted(true); // Set mounted to true

    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  // Only render the timer after the component has mounted
  if (!mounted) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 text-black text-center z-20">
      <h2 className="text-lg font-semibold mb-4 text-white">Stay Tuned we are Coming Online soon!</h2>
      <div className="flex justify-center space-x-6 text-6xl font-bold text-white">
        <div className="flex flex-col items-center">
          <span>{String(days).padStart(2, "0")}</span>
          <span className="text-sm font-medium mt-2 text-white-500">DAYS</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{String(hours).padStart(2, "0")}</span>
          <span className="text-sm font-medium mt-2 text-white-500">HOURS</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{String(minutes).padStart(2, "0")}</span>
          <span className="text-sm font-medium mt-2 text-white-500">MINUTES</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{String(secs).padStart(2, "0")}</span>
          <span className="text-sm font-medium mt-2 text-white-500">SECONDS</span>
        </div>
       
      </div>
      <div className="flex flex-row justify-center space-x-5 p-10 text-white">
  <Link
    href="https://www.facebook.com/kamalicecream1/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:scale-110 text-4xl"
  >
    <FacebookIcon className="text-4xl" />
  </Link>

  <Link
    href="https://www.instagram.com/kamalicecream/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:scale-110 text-4xl"
  >
    <InstagramIcon className="text-4xl" />
  </Link>
</div>



    </div>
  );
};

export default CountdownTimer;
