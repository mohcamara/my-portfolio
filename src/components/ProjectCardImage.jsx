import React from 'react'

const ProjectCardImage = ({ nom, type }) => {
    // Generate a deterministic gradient based on the project name length
    const gradients = [
        "from-slate-900 to-slate-800",
        "from-gray-900 to-gray-800",
        "from-zinc-900 to-zinc-800",
        "from-neutral-900 to-neutral-800",
    ];

    const bgGradient = gradients[nom.length % gradients.length];

    return (
        <div className={`w-full h-64 rounded-lg shadow-lg bg-gradient-to-br ${bgGradient} flex flex-col items-center justify-center p-6 relative overflow-hidden group`}>
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.1),transparent_70%)]"></div>
                <div className="grid grid-cols-6 gap-4 w-full h-full transform -rotate-12 scale-150">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="h-full w-[1px] bg-sky-500/20"></div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 mb-2">
                    {nom}
                </h3>
                <p className="text-gray-400 font-mono text-sm tracking-wider uppercase border-t border-gray-700 pt-2 mt-2 inline-block">
                    {type}
                </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    )
}

export default ProjectCardImage
