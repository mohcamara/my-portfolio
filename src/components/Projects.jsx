import React from 'react'
import Projet from './Projet'

const Projects = () => {

    const projets = [
        {
            "id": 1,
            "type": "Projet Académique",
            "nom": "Correct Exam",
            "description": "Une application web complète permettant la correction des examens plus rapidement",
            "technos": ["Java", "Quarkus", "Angular", "MySQL", "Docker", "PaddleOCR"],
            "github": "www.github.com/repo/",
            "isLive": true
        },
        {
            "id": 2,
            "type": "Projet de stage",
            "nom": "SantiguiDuMoulin",
            "description": "Une application web complète pour la vente de produits avicoles",
            "technos": ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
            "github": "www.github.com/repo/",
            "isLive": false
        },
        {
            "id": 3,
            "type": "Projet Personnel",
            "nom": "Chess Engine",
            "description": "Un moteur d'echecs en cours de developpement",
            "technos": ["Python"],
            "github": "https://github.com/MdBoulet/chess-engine",
            "isLive": false
        },
        {
            "id": 4,
            "type": "Projet Personnel",
            "nom": "Netflix Clone",
            "description": "Un clone du site web de netflix pour tester mes compétences en UI et css",
            "technos": ["React", "CSS"],
            "github": "https://github.com/MdBoulet/netflix-clone",
            "isLive": false
        },
        {
            "id": 5,
            "type": "Projet Personnel",
            "nom": "Twitter",
            "description": "Un clone du site web de twitter pour tester mes compétences en UI et css",
            "technos": ["React", "CSS"],
            "github": "https://github.com/MdBoulet/twitter-clone",
            "isLive": true
        },
    ]

  return (
    <div className='container mx-auto px-6 pt-24'>
      <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold mb-2 accent-color"><span className="text-gray-400 font-mono text-2xl">03.</span> Projets Réalisés</h2>
            <div className="w-24 h-1 bg-sky-500 mb-8"></div>
            <div className="space-y-12">
                {
                    projets.map(projet => {
                        return <Projet 
                                    key={projet.id}
                                    type={projet.type} 
                                    nom={projet.nom} 
                                    description={projet.description} 
                                    technos={projet.technos}
                                    github={projet.github}
                                    isLive={projet.isLive}
                                />
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default Projects