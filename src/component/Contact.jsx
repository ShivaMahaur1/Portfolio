import React, { useState, useRef, useEffect } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaDribbble } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const canvasRef = useRef(null);

  // Star animation background (like other sections)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  return (
    <div
      id="contact"
      className="relative w-full px-0 py-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Star canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing
            together.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-300 mb-6">
                Send me a message
              </h2>

              <form
                action="https://formspree.io/f/xrbkgzbz" // replace with your Formspree endpoint
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border text-gray-200 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 text-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 text-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 text-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r  from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-300 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-200 p-3 rounded-full">
                    <HiMail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a
                      href="mailto:alex.johnson@email.com"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      shivamahaur714@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-200 p-3 rounded-full">
                    <HiPhone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="text-lg font-medium text-blue-600">
                      +91 9639753716
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-200 p-3 rounded-full">
                    <HiLocationMarker className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">
                      Location
                    </h3>
                    <p className="text-lg font-medium text-blue-600">
                      Agra, UttarPradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-8"></div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Follow me
                </h2>
                <div className="mb-6">
                  <p className="text-lg font-medium text-gray-300 mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent font-bold">
                      Let's work together!
                    </span>{" "}
                    I'm always excited to take on new challenges and collaborate
                    on innovative projects. Whether you have a specific idea in
                    mind or just want to explore possibilities, I'd love to hear
                    from you.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/shiva-mahaur-914063356/"
                    className="bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors p-3 rounded-full"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/ShivaMahaur1"
                    className="bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors p-3 rounded-full"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
