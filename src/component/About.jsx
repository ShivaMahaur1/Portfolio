import React, { useRef, useEffect } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { VscSymbolColor } from "react-icons/vsc";
import { IoRocketSharp } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";

const About = () => {
  const canvasRef = useRef(null);

  // Star animation effect (same as Hero section)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numStars = 100;
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

  return (
    <div id='about' className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Star canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl mb-20 md:text-5xl font-bold text-gray-300 text-center ">
          About Me
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-2/3">
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              With over 2 years of experience in full-stack development, I specialize in creating modern, responsive web applications that deliver exceptional user experiences. My journey in technology began with a passion for problem-solving and has evolved into expertise across multiple programming languages and frameworks.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              I believe in the power of clean, efficient code and user-centered design. Every project I work on is an opportunity to push boundaries, learn something new, and create solutions that make a real impact.
            </p>

            {/* Stats just below about paragraphs */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-10 w-full">
              <div className="bg-transparent rounded-2xl p-8 w-full sm:w-1/2 max-w-xs">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-blue-500 mb-2">5+</div>
                  <div className="text-xl font-medium text-gray-400">Projects Completed</div>
                </div>
              </div>
              <div className="bg-transparent rounded-2xl p-8 w-full sm:w-1/2 max-w-xs">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-blue-500 mb-2">2+</div>
                  <div className="text-xl font-medium text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-10"></div>

            {/* Feature grid on mobile */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
                {[
                  { title: "Clear Code",icon:<FaLaptopCode/>, description: "Writing maintainable, scalable, and efficient code" },
                { title: "Design Focus",icon:<VscSymbolColor/>, description: "Creating beautiful and intuitive user interfaces" },
                { title: "Performance",icon:<IoRocketSharp/>, description: "Building fast and optimized web applications" },
                { title: "Collaboration",icon:<IoPeopleOutline/>, description: "Working effectively in team environments" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-transparent p-6 rounded-lg  hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Grid to the right on large screens */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Clear Code",icon:<FaLaptopCode/>, description: "Writing maintainable, scalable, and efficient code" },
                { title: "Design Focus",icon:<VscSymbolColor/>, description: "Creating beautiful and intuitive user interfaces" },
                { title: "Performance",icon:<IoRocketSharp/>, description: "Building fast and optimized web applications" },
                { title: "Collaboration",icon:<IoPeopleOutline/>, description: "Working effectively in team environments" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-transparent p-6 rounded-lg  hover:shadow-md transition-shadow duration-300"
                >
                <div className='flex gap-2'>
                    <span className='text-xl font-bold text-blue-500  mt-1.5'>{feature.icon }</span>
                    <h3 className="text-xl font-bold text-blue-500 mb-2"> {feature.title}</h3>
                </div>
                  
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;