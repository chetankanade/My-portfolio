import React from 'react'

function AboutUs() {
  return (
    <section id='about' className='bg-gray-100 py-24 flex items-center'>
      <div className='container mx-auto px-10'>
        <h1 className='text-3xl font-semibold'>About Me</h1>
        <div className='grid md:grid-cols-2 gap-12 items-center pt-10'>
          <div>
            <p className="text-lg mb-6">
              I'm a passionate web developer with a keen eye for design and a strong technical foundation. I enjoy crafting seamless user experiences through clean, efficient code.
            </p>
            <p className="text-lg mb-6">
              With experience in both frontend and backend technologies, I bring ideas to life by creating responsive, accessible, and performant applications that solve real problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities to recharge.
            </p>
          </div>

          <div className='bg-white py-16 px-10 rounded-lg shadow-md'>
            <h2 className='font-semibold text-2xl mb-3'>Experience</h2>
            <div className='space-y-3'>
              <div>
                <p className='font-semibold text-lg'>Web Developer</p>
                <p className='text-gray-600'>Moon Technolabs Jan 2023 - Present</p>
              </div>
              <div>
                <p className='font-semibold text-lg'>Web Developer</p>
                <p className='text-gray-600'>Siya tech ventures March 2022 - Dec 2022</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs