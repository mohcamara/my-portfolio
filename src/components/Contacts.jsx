import React from 'react'

const Contacts = () => {
  return (
    <div className='container mx-auto px-6 pt-24'>
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-2 accent-color"><span className="text-gray-400 font-mono text-2xl">04.</span> Contact</h2>
        <div className="w-24 h-1 bg-sky-500 mb-8 mx-auto"></div>
        <h3 className="text-4xl font-bold text-gray-100 mb-4">Entrons en contact !</h3>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Je suis actuellement à la recherche d'un stage suivi d'une alternance en ingénierie logicielle et suis ouvert à toute opportunité. N'hésitez pas à me contacter si mon profil vous intéresse !
        </p>
        <a href="mailto:lamineboulet@gmail.com" className="inline-block bg-transparent border-2 border-sky-400 text-sky-400 font-bold text-lg py-3 px-8 rounded-lg hover:bg-sky-400 hover:text-gray-900 transition-all duration-300 mb-8">
          Me contacter
        </a>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/mdboulet" target="_blank" className="text-gray-400 hover:text-sky-400 transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/mohcamara" target="_blank" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contacts