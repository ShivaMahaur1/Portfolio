import React, { useState, useRef, useEffect } from 'react';
import { FaReact,FaGithub, FaNodeJs,  } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';



const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const categories = ['All Projects', 'Full Stack', 'Frontend'];
  const canvasRef = useRef(null);

  // Star animation background (like Skill section)
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

  const projects = [
    // ...existing projects array...
    {
      id: 1,
      title: 'Netflix Clone',
      description: 'I built a Netflix clone using React, MongoDB, and the TMDB API. It features user authentication, responsive design, and dynamic movie listings. The project highlights my skills in full-stack development and UI/UX design.',
      category: 'Full Stack',
      technologies: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
        { name: 'Express', icon: <SiExpress className="text-black" /> }
      ],
      link:'https://netflix-clone-1-0egv.onrender.com/',
      git:'https://github.com/ShivaMahaur1/netflix-clone'

    },
    {
      id: 2,
      title: 'Soft Sell',
      description: 'SoftSell is a platform that simplifies buying and selling software. It connects developers and businesses for secure, hassle-free transactions.',
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      link:'https://softsellll.netlify.app/',
      git:'https://github.com/ShivaMahaur1/netflix-clone'
    },
    {
      id: 3,
      title: 'Cooling-Service',
      description: 'Our cooling service keeps you comfortable all summer with fast, reliable AC installation and maintenance. We ensure your air conditioning runs efficiently when you need it most.',
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      link:'https://poetic-kangaroo-e5494f.netlify.app/',
      git:'https://github.com/ShivaMahaur1/Qooling-Service'
    },
    {
      id: 4,
      title: 'Job Portal',
      description: 'Insider Jobs is a job portal designed to connect job seekers with top companies quickly and efficiently. It features smart filtering, real-time listings, and a user-friendly interface.',
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      link:'https://whimsical-strudel-ad9ea4.netlify.app/',
      git:'https://github.com/ShivaMahaur1/Job-Portal'
    },
    
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'All Projects' || project.category === activeCategory;
    return categoryMatch;
  });

  return (
    <div id='projects' className="relative w-full px-0 py-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Star canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-2">Featured Projects</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work and technical expertise
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div  className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        {/* Status Badge */}
        
        
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-300 mb-3">{project.title}</h2>
        
        {/* Description */}
        <p className="text-gray-400 mb-5">{project.description}</p>
        
        {/* Technologies */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="text-xl">{tech.icon}</div>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* View Button */}
        <div className="flex gap-3.5 justify-end">
          <button   className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
           <a href={project.link || "#"}>
            View
            </a> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <a href={project.git}>
            <FaGithub 
            className='mt-2.5 text-gray-600 hover:text-black cursor-pointer text-3xl '
          />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Project;