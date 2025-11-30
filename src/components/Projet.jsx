import React from 'react'
import ProjectCardImage from './ProjectCardImage'

const Projet = ({ type, nom, description, technos, github, isLive, image }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
                <ProjectCardImage nom={nom} type={type} />
            </div>
            <div className="text-right">
                <p className="text-sky-400">{type}</p>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{nom}</h3>
                <div className="glass-effect p-6 rounded-lg mb-4 text-left shadow-lg">
                    <p className="text-gray-300">
                        {description}
                    </p>
                </div>
                <div className="flex justify-end space-x-2 flex-wrap mb-4">
                    {
                        technos.forEach(tech => {
                            <span className="skill-tag px-3 py-1 m-1 rounded-full text-sm">{tech}</span>
                        })
                    }
                </div>
                <div className="flex justify-end space-x-4">
                    <a href={github} target="_blank" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>Code Source</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    {
                        isLive && <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>Démo Live</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Projet