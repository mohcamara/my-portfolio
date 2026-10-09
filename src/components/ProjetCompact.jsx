import React from 'react'
import { motion } from 'framer-motion'
import ProjectLinks from './ProjectLinks'

const ProjetCompact = ({ type, nom, description, technos = [], github, demo }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="glass-effect p-6 rounded-lg flex flex-col"
    >
        <p className="text-sky-400 font-mono text-xs mb-1">{type}</p>
        <h4 className="text-lg font-bold text-gray-100 mb-2">{nom}</h4>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
            {technos.map(tech => (
                <li key={tech} className="skill-tag px-2.5 py-0.5 rounded-full text-xs">{tech}</li>
            ))}
        </ul>
        <ProjectLinks nom={nom} github={github} demo={demo} />
    </motion.article>
)

export default ProjetCompact