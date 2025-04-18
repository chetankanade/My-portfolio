import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Intro from './Components/Intro';
import Myskills from './Components/skills';
import CustomCursor from './Components/customCursor';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <CustomCursor />

      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <header className="p-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>

        <main className="max-w-6xl mx-auto">

          <Intro theme={theme} />
          <Myskills />



          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <div className="flex gap-6 text-2xl">
              <a href="https://github.com/chetankanade" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chetan-kanade-08/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="chetankanade8@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>

  );
}
