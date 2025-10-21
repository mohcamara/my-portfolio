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
            <a href="mailto:lamineboulet@gmail.com" className="inline-block bg-transparent border-2 border-sky-400 text-sky-400 font-bold text-lg py-3 px-8 rounded-lg hover:bg-sky-400 hover:text-gray-900 transition-all duration-300">
                Me contacter
            </a>
        </section>
    </div>
  )
}

export default Contacts