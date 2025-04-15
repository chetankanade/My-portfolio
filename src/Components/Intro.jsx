import React from 'react';

function Intro({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col md:flex-row items-center gap-20 mt-10">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hi, I am</h1>
        <h2 className={`text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>Chetan Kanade</h2>
        <h3 className={`text-2xl font-light mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Full-stack Developer & Problem Solver
        </h3>

        <div>
          <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>Projects</h4>
          <ul className={`space-y-2 text-sm list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>
              <span className={`${isDark ? 'text-white' : 'text-black'} font-medium`}>Project One:</span> A simple web app to showcase my skills. Built with React and Tailwind CSS.
            </li>
            <li>
              <span className={`${isDark ? 'text-white' : 'text-black'} font-medium`}>Project Two:</span> An API built with Node.js and Express, connected to a MySQL database.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[300px] md:w-[400px]">
          <img
            src="/mypic.webp"
            alt="Chetan Kanade"
            className="rounded-3xl shadow-[0_0_40px_#8B5CF6] border-purple-500"
          />
          {/* Optional background glow */}
          {/* <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-xl blur-2xl z-[-1]"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
