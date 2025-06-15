import React, { useRef, useEffect, useState } from 'react';

const Skill = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const canvasRef = useRef(null);

  // Star animation effect (same as About/Hero)
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

  const frontendSkills = [
    { name: 'React', percentage: 65 },
    { name: 'HTML , CSS', percentage: 70 },
    { name: 'Tailwind CSS', percentage: 60 },
    { name: 'JavaScript', percentage: 50 }
  ];

  const backendSkills = [
    { name: 'Node', percentage: 40 },
    { name: 'Express', percentage: 40 },
  ];

  const DatabaseSkills = [
    { name: 'MongoDb', percentage: 60 },
    { name: 'MySql', percentage: 50 },
  ];

  const otherSkills = [
    { name: 'Dsa', percentage: 65 },
    { name: 'C', percentage: 65 },
    { name: 'C++', percentage: 60 },
    { name: 'Python', percentage: 60 },
  ];

  return (
     <div id='skills' className="relative w-full px-0 py-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
    {/* Star canvas background */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
    <div className="relative max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Skills & Expertise</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and methodologies
        </p>
      </div>

        {/* Skills Content */}
        <div className="bg-transparent w-full rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">Frontend Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="font-medium text-blue-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-10 text-center font-bold text-gray-300 mb-8">Backend Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backendSkills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="font-medium text-blue-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-10 text-center font-bold text-gray-300 mb-8">Database Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DatabaseSkills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="font-medium text-blue-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl text-center mt-10 font-bold text-gray-300 mb-8">Other Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherSkills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="font-medium text-blue-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;