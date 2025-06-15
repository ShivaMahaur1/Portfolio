import React, { useState, useEffect, useRef } from "react";

const titles = [
  "Frontend Developer!",
  "Backend Developer!",
  "Full Stack Developer!",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const canvasRef = useRef(null);

  // Star animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numStars = 50;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.5,
      d: Math.random() * 0.5 + 0.2,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      stars.forEach((star) => {
        ctx.globalAlpha = Math.random() * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    function animateStars() {
      stars.forEach((star) => {
        star.y += star.d;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });
      drawStars();
      requestAnimationFrame(animateStars);
    }

    animateStars();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Title animation (right to left, character by character)
  useEffect(() => {
    let charIndex = titles[currentTitle].length;
    setDisplayedText(""); // Clear before animating

    const reveal = () => {
      if (charIndex >= 0) {
        setDisplayedText(titles[currentTitle].slice(charIndex));
        charIndex--;
        setTimeout(reveal, 50);
      }
    };
    reveal();

    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000 + titles[currentTitle].length * 50);

    return () => clearInterval(titleInterval);
    // eslint-disable-next-line
  }, [currentTitle]);

  useEffect(() => {
    setDisplayedText("");
  }, [currentTitle]);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 overflow-hidden">
      {/* Star canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative max-w-4xl text-center">
        {/* Intro text */}
        <h1 className="text-2xl md:text-3xl font-light text-gray-600 mb-4">
          Hello, I'm
        </h1>

        {/* Name */}
        <h2 className="text-5xl  md:text-7xl font-bold bg-gradient-to-r from-gray-600 via-gray-400 to-white bg-clip-text text-transparent mb-6">
          Shiva Mahaur
        </h2>

        {/* Animated Title Character by Character Right to Left */}
        <div className="mb-8 min-h-[56px]">
          <span className="inline-block text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-700 transition-all duration-300">
            {displayedText}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting seamless digital experiences from intuitive interfaces to robust backend systems.
          End-to-end development that merges design, logic, and performance at every layer.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/ShivaMahaur1"
            className="px-8 py-3 bg-gray-700 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-gray-600 border border-gray-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;