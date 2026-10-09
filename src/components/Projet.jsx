import React from 'react'
import { motion } from 'framer-motion'
import ProjectCardImage from './ProjectCardImage'
import ProjectLinks from './ProjectLinks'

const Projet = ({ type, annee, nom, description, highlights = [], technos = [], github, demo, video, reverse }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
            <div className={reverse ? 'md:order-2' : ''}>
                {video ? (
                    <video
                        className="w-full rounded-lg shadow-lg bg-black"
                        src={`${import.meta.env.BASE_URL}${video}`}
                        controls
                        preload="metadata"
                        playsInline
                        aria-label={`Démo vidéo de ${nom}`}
                    />
                ) : (
                    <ProjectCardImage nom={nom} type={type} />
                )}
            </div>

            <div className={reverse ? 'md:order-1' : ''}>
                <p className="text-sky-400 font-mono text-sm">
                    {type}{annee && ` · ${annee}`}
                </p>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{nom}</h3>

                <div className="glass-effect p-6 rounded-lg mb-4 shadow-lg">
                    <p className="text-gray-300">{description}</p>
                    {highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                            {highlights.map(h => (
                                <li key={h} className="flex">
                                    <span className="text-sky-400 mr-2">▹</span>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <ul className="flex flex-wrap gap-2 mb-4">
                    {technos.map(tech => (
                        <li key={tech} className="skill-tag px-3 py-1 rounded-full text-sm">{tech}</li>
                    ))}
                </ul>

                <ProjectLinks nom={nom} github={github} demo={demo} />
            </div>
        </motion.article>
    )
}

export default Projet