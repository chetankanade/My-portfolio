
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-3 py-14">
      <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
        <p className="mb-4 font-semibold text-xl text-yellow-300">Full Stack Web Developer</p>
        <h1 className="text-gradient mb-6 leading-tight text-6xl block text-yellow-500">Hi, I'm <span className="block text-yellow-500">Chetan kanade</span></h1>
        <p className="text-portfolio-gray text-lg mb-8 max-w-lg">
          I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="text-white px-6 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 font-medium">View My Work</a>
          <a href="#contact" className="border-2 border-yellow-300 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-white">Contact Me</a>
        </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
        <div className="relative">
          <div className="w-74 h-74 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-blue-mid to-portfolio-accent opacity-10 absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4"></div>
          <div className="w-66 h-66 md:w-72 md:h-72 bg-portfolio-gray-light rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
          {/* Replace with your profile image */}
          <div className="w-full h-full bg-portfolio-gray-mid flex items-center justify-center text-white">
            {/* <span className="text-6xl">YN</span> */}
            <img src='../../../../public/mypic.webp' alt="Your Name" className="w-full h-full object-cover rounded-full" />
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
        <ArrowDownCircle className="text-yellow-300" size={30} />
        </a>
      </div>
      </div>
    </section>
    );
};

export default Hero;
