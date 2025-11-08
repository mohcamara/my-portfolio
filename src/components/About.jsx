import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-6 pt-24'>
		<section id="about" className="py-24">
            <h2 className="text-3xl font-bold mb-2 accent-color"><span className="text-gray-400 font-mono text-2xl">01.</span> À propos de moi</h2>
            <div className="w-24 h-1 bg-sky-500 mb-8"></div>
            <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3 text-gray-300 space-y-4 text-lg">
                    <p>
                        Dès mon plus jeune âge, j'ai été fasciné par la manière dont la technologie pouvait résoudre des problèmes concrets. Cette curiosité m'a naturellement orienté vers l'ingénierie logicielle, un domaine où la logique rencontre la créativité.
                    </p>
                    <p>
                        Actuellement en Master à L'Université de Rennes, je me spécialise dans les architectures logicielles et les méthodologies de développement agiles. J'aime particulièrement travailler sur des projets de bout en bout, de la conception de l'interface utilisateur à la mise en place de l'infrastructure backend.
                    </p>
                    <p>
                        En dehors du code, je suis passionné de basketball, de musculation et d'echecs.
                    </p>
                </div>
                {/* <div className="md:col-span-2 flex justify-center">
                    <div className="w-64 h-64 rounded-lg bg-gray-800 relative group">
                        <img src="https://placehold.co/400x400/1F2937/E5E7EB?text=Votre+Photo" alt="Photo" className="rounded-lg absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                        <div className="w-full h-full border-2 border-sky-400 rounded-lg absolute top-0 left-0 transition-transform duration-300 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default About