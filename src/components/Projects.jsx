import React, { useState } from 'react'
import Projet from './Projet'
import ProjetCompact from './ProjetCompact'

// Champs :
//  - featured : projet mis en avant (grande carte avec points clés)
//  - categorie : sert au filtre ("IA & Data", "Fullstack", "Frontend", "Autre")
//  - highlights : 2-3 points concrets (ce que TU as fait, avec résultats si possible)
//  - github / demo : mettre null pour masquer le bouton (jamais "#")
const projets = [
    {
        id: 1,
        featured: true,
        categorie: 'IA & Data',
        type: 'Projet personnel · RAG',
        annee: '2026',
        nom: 'Dev Assistant',
        description:
            "Assistant IA d'exploration de code : il ingère un dépôt Git, le découpe en unités de code et permet de l'interroger en langage naturel.",
        highlights: [
            'Pipeline de bout en bout : ingestion Git, parsing AST (tree-sitter), indexation asynchrone.',
            'Transformation de code multi-langages en représentations structurées et interrogeables.',
            'Recherche vectorielle avec PostgreSQL / pgvector.',
        ],
        technos: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'tree-sitter', 'Docker'],
        github: "https://github.com/mohcamara/dev-assistant",
        video: "/videos/demo_linkedin.mp4"
    },
    {
        id: 2,
        featured: true,
        categorie: 'IA & Data',
        type: 'Projet académique · Master 1',
        annee: '2025 – 2026',
        nom: 'CorrectExam',
        description:
            "Plateforme web de correction d'examens assistée par IA, pensée pour faire gagner du temps aux enseignants.",
        highlights: [
            "Exécution de modèles de Deep Learning côté navigateur via WebAssembly / ONNX Runtime.",
            'OCR des copies avec PaddleOCR.',
            'Application complète : API Java/Quarkus, front Angular, déploiement Docker.',
        ],
        technos: ['Java', 'Quarkus', 'Angular', 'TypeScript', 'ONNX Runtime', 'WebAssembly', 'PaddleOCR', 'MySQL', 'Docker'],
        github: 'https://github.com/mohcamara/correct-exam-m1-2025-front',
        video: "/videos/correct-exam.mp4"
    },
    {
        id: 3,
        featured: true,
        categorie: 'Fullstack',
        type: 'Projet de stage',
        annee: '',
        nom: 'SantiguiDuMoulin',
        description: 'Application web complète pour la vente de produits avicoles.',
        highlights: [
            'API REST Spring Boot sécurisée avec Spring Security.',
            'Interface Angular, base MySQL, conteneurisation Docker.',
            'Développé en équipe (GitLab).',
        ],
        technos: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'MySQL', 'Docker'],
        github: 'https://gitlab.com/stagesantiguidumoulin-group/santiguidumoulin',
        demo: null,
    },
    {
        id: 4,
        featured: false,
        categorie: 'Autre',
        type: 'Projet personnel',
        nom: 'Chess Engine',
        description: "Moteur d'échecs en cours de développement.",
        technos: ['Python'],
        github: 'https://github.com/MdBoulet/chess-engine',
        demo: null,
    },
    {
        id: 5,
        featured: false,
        categorie: 'Frontend',
        type: 'Frontend',
        nom: 'Netflix UI Replica',
        description: "Réplique de l'interface Netflix : CSS avancé et animations.",
        technos: ['React', 'CSS'],
        github: 'https://github.com/MdBoulet/netflix-clone',
        demo: null,
    },
    {
        id: 6,
        featured: false,
        categorie: 'Frontend',
        type: 'Frontend',
        nom: 'Twitter UI Replica',
        description: "Réplique de l'interface X (Twitter) : composants réutilisables et responsive.",
        technos: ['React', 'CSS'],
        github: 'https://github.com/MdBoulet/twitter-clone',
        demo: null,
    },
]

const filtres = ['Tous', 'IA & Data', 'Fullstack', 'Frontend', 'Autre']

const Projects = () => {
    const [filtre, setFiltre] = useState('Tous')
    const visibles = projets.filter(p => filtre === 'Tous' || p.categorie === filtre)
    const vedettes = visibles.filter(p => p.featured)
    const autres = visibles.filter(p => !p.featured)

    return (
        <div className="container mx-auto px-6 pt-24">
            <section id="projects" className="py-24">
                <h2 className="text-3xl font-bold mb-2 accent-color">
                    <span className="text-gray-400 font-mono text-2xl">03.</span> Projets Réalisés
                </h2>
                <div className="w-24 h-1 bg-sky-500 mb-8"></div>

                <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filtrer les projets">
                    {filtres.map(f => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setFiltre(f)}
                            aria-pressed={filtre === f}
                            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                                filtre === f
                                    ? 'bg-sky-500 text-white'
                                    : 'bg-gray-700/60 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="space-y-20">
                    {vedettes.map((projet, index) => (
                        <Projet key={projet.id} {...projet} reverse={index % 2 === 1} />
                    ))}
                </div>

                {autres.length > 0 && (
                    <div className="mt-24">
                        <h3 className="text-xl font-bold text-gray-100 mb-6">Autres projets</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {autres.map(projet => (
                                <ProjetCompact key={projet.id} {...projet} />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Projects
