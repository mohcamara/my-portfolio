import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const linkClass = 'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-sky-400 transition-colors'

const ProjectLinks = ({ nom, github, demo }) => (
    <div className="flex items-center gap-4">
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`Code source de ${nom}`}>
                <FaGithub size={20} /> Code
            </a>
        )}
        {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`Démo de ${nom}`}>
                <FiExternalLink size={20} /> Démo
            </a>
        )}
    </div>
)

export default ProjectLinks