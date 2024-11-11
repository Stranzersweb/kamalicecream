"use client";
import React, { useRef, useState, useEffect } from "react";
import { ParallaxScroll } from "@/Components/ui/parallax-scroll";
import CountdownTimer from "@/Components/countDownTimer";
import { LampContainer } from "@/Components/ui/lamp";
import { motion } from "framer-motion";
k';

// Initial set of images
const baseImages = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1502174832274-bc176e52765a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1529688499411-262f191fe29e?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590080962330-747c6aba8028?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1689298465703-a1e491ede3fd?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Countdown Timer Component
// const CountdownTimer = ({ duration }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const timerId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return (
//     <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-xl px-4 py-2 rounded-lg z-20">
//       {formatTime(timeLeft)}
//       d
//     </div>
//   );
// };

export default function ParallaxScrollDemo() {
  const [images, setImages] = useState([...baseImages, ...baseImages]); // Duplicate the initial images for looping
  const scrollContainerRef = useRef(null);

  // Function to load more images by looping
  const loadMoreImages = (position) => {
    if (position === "top") {
      setImages((prevImages) => [...baseImages, ...prevImages]);
    } else {
      setImages((prevImages) => [...prevImages, ...baseImages]);
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;

    if (scrollTop === 0) {
      loadMoreImages("top");
    }
    if (scrollTop + clientHeight >= scrollHeight) {
      loadMoreImages("bottom");
    }
  };


  return (
    <div className="relative h-screen z-1">
      {/* Countdown Timer Overlay */}
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      <CountdownTimer />
      
    
      </motion.h1> {/* 5 minutes countdown */}
      </LampContainer>
      
      {/* Blurred Parallax Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-scroll filter blur-sm z-10" // Apply blur effect
      >
        <ParallaxScroll className="h-full" images={images} />
      </div>
    </div>
  );
}
