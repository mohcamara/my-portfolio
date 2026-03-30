import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaJira } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiSpring, SiPostgresql, SiMysql, SiMongodb, SiPostman, SiAngular } from 'react-icons/si';

const technologies = [
    { name: 'Java', icon: <FaJava size={40} className="text-red-500" /> },
    { name: 'Spring Boot', icon: <SiSpring size={40} className="text-green-500" /> },
    { name: 'Python', icon: <FaPython size={40} className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-300" /> },
    { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Angular', icon: <SiAngular size={40} className="text-red-600" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: 'SQL', icon: <FaDatabase size={40} className="text-gray-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-400" /> },
    { name: 'MySQL', icon: <SiMysql size={40} className="text-orange-500" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: 'C++', icon: <SiCplusplus size={40} className="text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
    { name: 'Docker', icon: <FaDocker size={40} className="text-blue-500" /> },
    { name: 'Jira', icon: <FaJira size={40} className="text-blue-400" /> },
    { name: 'Postman', icon: <SiPostman size={40} className="text-orange-500" /> },
];

const TechMarquee = () => {
    return (
        <div className="py-10 overflow-hidden relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

            <motion.div
                className="flex space-x-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {[...technologies, ...technologies].map((tech, index) => ( // Duplicate for seamless loop
                    <div key={index} className="flex flex-col items-center justify-center space-y-2 mx-6 min-w-[100px] glass-effect p-4 rounded-xl border border-gray-700/50 hover:border-sky-500/50 transition-colors">
                        {tech.icon}
                        <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
