import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto px-6 pt-24'>
        <section id="home" className="min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-3xl">
                <p className="text-lg text-sky-400 mb-2">Bonjour, je suis</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100">Mohamed Lamine Camara.</h1>
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-400 mt-2">Je conçois des logiciels robustes.</h2>
                <p className="mt-6 max-w-xl text-gray-300">
                    Étudiant en Master 1 Ingénierie Logicielle, passionné par la création d'applications performantes et intuitives. Je suis actuellement à la recherche d'une alternance pour mettre en pratique mes compétences.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                    <a href="src/assets/CV.pdf" download className="bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-transform transform hover:scale-105">
                        Télécharger mon CV
                    </a>
                    <a href="https://github.com/mohcamara" target="_blank" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://linkedin.com/in/mohcamara" target="_blank" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero