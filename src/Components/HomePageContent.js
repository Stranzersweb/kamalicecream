'use client';
import React, { useEffect, useState } from 'react';
import NavBar from './Header';

const HomePageContent = () => {
  const [showEnglishText, setShowEnglishText] = useState(true);

  useEffect(() => {
    // Set up a timer to toggle between English and Hindi text every 3 seconds
    const timer = setInterval(() => {
      setShowEnglishText((prev) => !prev);
    }, 7000);

    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1473213110592-19430a217c0e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    animation: 'zoomInOut 10s infinite alternate',
  };

  const textContainerStyle = {
    position: 'relative', // Ensure position is relative
    zIndex: 1, // Set z-index to place it above the background image
    transition: 'opacity 0.8s ease-in-out',
    opacity: showEnglishText ? 1 : 0,
  };

  return (
    <div style={containerStyle}>
      <NavBar />
      <style>
        {`
          @keyframes zoomInOut {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      <div style={textContainerStyle}>
        <h1 className="text-4xl font-bold mb-4">
          {showEnglishText ? 'Kamal Ice Cream' : 'कमल आइसक्रीम'}
        </h1>
        <p className="text-lg text-center font-medium">
          {showEnglishText ? 'Serving since 1978' : '१९७८ से सेवा कर रहे हैं'}
        </p>
      </div>
    </div>
  );
};

export default HomePageContent;
