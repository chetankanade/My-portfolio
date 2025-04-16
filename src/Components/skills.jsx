import React from 'react'

const skills = {
    frontend: [
        'HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'Redux',
        'Vue JS', 'Nuxt JS', 'VueX', 'Pinia', 'TypeScript', 'SCSS', 'Tailwind', 'React Native'
    ],
    backend: [
        'Node JS', 'Express', 'GO', 'PHP', 'MySQL', 'PostgreSQL', 'MongoDB'
    ]
};

function Myskills() {
    return (
        <section className=" text-white font-sans text-center py-12">
            <h2 className="text-4xl font-bold mb-10 text-white">Skills</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-4">
                {/* Frontend Skills */}
                <SkillCard title="FRONT END" skills={skills.frontend} />

                {/* Backend Skills */}
                <SkillCard title="BACK END" skills={skills.backend} />
            </div>
        </section>
    )
}

const SkillCard = ({ title, skills }) => (
    <div className="rounded-2xl p-6 w-full md:w-1/2 bg-gradient-to-br from-[#20f1f3e] to-[#2c2c3a] shadow-lg border border-[#2e2e3e]">
      <h3 className="text-orange-400 text-2xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#3a3a4d] text-white px-4 py-2 rounded-md hover:bg-[#50506b] transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
  

export default Myskills