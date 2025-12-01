import React from 'react'
import Projet from './Projet'

const Projects = () => {

    const projets = [
        /*{
            "id": 101,
            "type": "Systèmes Distribués",
            "nom": "Distributed Task Scheduler",
            "description": "Orchestrateur de tâches tolérant aux pannes utilisant l'algorithme de consensus Raft pour l'élection de leader et la distribution de charge.",
            "technos": ["Go", "gRPC", "Raft", "Docker", "Kubernetes"],
            "github": "https://github.com/mohcamara/distributed-scheduler",
            "isLive": false
        },
        {
            "id": 102,
            "type": "Intelligence Artificielle",
            "nom": "AI Code Reviewer",
            "description": "Outil CI/CD analysant automatiquement les Pull Requests via LLM pour détecter les failles de sécurité et suggérer des optimisations.",
            "technos": ["Python", "OpenAI API", "GitHub Actions", "Docker"],
            "github": "https://github.com/mohcamara/ai-code-reviewer",
            "isLive": false
        },
        {
            "id": 103,
            "type": "Full Stack / Temps Réel",
            "nom": "CollabBoard",
            "description": "Plateforme de collaboration en temps réel avec résolution de conflits via CRDTs (Yjs) et curseurs partagés.",
            "technos": ["React", "Node.js", "Socket.io", "Yjs", "Redis"],
            "github": "https://github.com/mohcamara/collab-board",
            "isLive": true
        }, */
        {
            "id": 1,
            "type": "Projet Académique",
            "nom": "Correct Exam",
            "description": "Une application web complète permettant la correction des examens plus rapidement",
            "technos": ["Java", "Quarkus", "Angular", "MySQL", "Docker", "PaddleOCR"],
            "github": "https://github.com/mohcamara/correct-exam-m1-2025-front",
            "isLive": true
        },
        {
            "id": 2,
            "type": "Projet de stage",
            "nom": "SantiguiDuMoulin",
            "description": "Une application web complète pour la vente de produits avicoles",
            "technos": ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
            "github": "https://gitlab.com/stagesantiguidumoulin-group/santiguidumoulin",
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