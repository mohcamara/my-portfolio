import React from 'react'
import { FaJava } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='container mx-auto px-6 pt-24'>
		<section id="skills" className="py-24">
            <h2 className="text-3xl font-bold mb-2 accent-color"><span className="text-gray-400 font-mono text-2xl">02.</span> Compétences Techniques</h2>
            <div className="w-24 h-1 bg-sky-500 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Langages</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Java</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Python</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>TypeScript / JavaScript</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>SQL</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>C++</li>
                    </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Frameworks & Librairies</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Spring Boot</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Angular / React</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Node.js (Express)</li>
                    </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Bases de Données</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>PostgreSQL</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>MySQL</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>MongoDB</li>
                    </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Outils & DevOps</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Git & GitHub</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Docker</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Jira</li>
                        <li className="flex items-center"><span className="text-sky-400 mr-2">▹</span>Postman</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills