import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import ThreeBackground from './components/ThreeBackground'

const App = () => {

	const [show, setShow] = useState(false)

	const [loading, setLoading] = useState(false)

	const [text, setText] = useState("Sélectionnez une action pour commencer...")

	const [showCopy, setCopy] = useState(false)

	const showModal = () => {
		setShow(!show)
	}

	const textMail = "Rédige un e-mail professionnel et concis d'un recruteur s'adressant à Mohamed Lamine Camara pour exprimer son intérêt pour son profil en vue d'une alternance en ingénierie logicielle. L'e-mail doit être court, engageant et se terminer par une proposition de discussion."

	async function callGeminiAPI(prompt, retries = 3, delay = 1000) {
		const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
		// Updated to a stable model version
		const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

		const payload = {
			contents: [{ parts: [{ text: prompt }] }],
		};

		setLoading(true) // Ensure loading is set to true explicitly
		setText("")

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(`Erreur HTTP: ${response.status} - ${errorData.error?.message || response.statusText}`);
			}

			const result = await response.json();
			const candidate = result.candidates?.[0];

			if (candidate && candidate.content?.parts?.[0]?.text) {
				setLoading(false)
				setText(candidate.content?.parts?.[0]?.text)
				setCopy(true)
			} else {
				throw new Error("Réponse invalide de l'API Gemini.");
			}

		} catch (error) {
			console.error("Erreur lors de l'appel à l'API Gemini:", error);
			if (retries > 0) {
				console.log(`Nouvel essai dans ${delay / 1000}s... (${retries} essais restants)`);
				await new Promise(res => setTimeout(res, delay));
				return callGeminiAPI(prompt, retries - 1, delay * 2);
			} else {
				setLoading(false);
				setText(`Désolé, une erreur est survenue : ${error.message}. Veuillez réessayer plus tard.`);
			}
		} finally {

		}
	}

	const redigeMail = () => {
		callGeminiAPI(textMail)
	}


	const copyText = () => {
		navigator.clipboard.writeText(text)
		alert("Text Copié avec succès !")
	}

	return (
		<div className="relative min-h-screen overflow-hidden">
			<ThreeBackground />
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1600px]">
				<Header />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contacts />
			</div>
			<button onClick={showModal} id="ai-assistant-button" className="fixed bottom-8 right-8 bg-sky-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-sky-600 transition-transform transform hover:scale-110 z-40">
				✨
			</button>

			<div id="ai-assistant-modal" className={show ? "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50" : "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 invisible opacity-0"}>
				<div id="modal-content" className="glass-effect rounded-lg p-8 w-full max-w-2xl max-h-[90vh] flex flex-col">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl font-bold text-gray-100">✨ Assistant IA</h2>
						<button onClick={showModal} className="text-gray-400 hover:text-white">&times;</button>
					</div>

					<div id="ai-actions" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<button onClick={redigeMail} data-action="email" className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-lg transition-colors">Rédiger un e-mail</button>
					</div>

					<div id="ai-result-container" className="bg-gray-900/50 p-6 rounded-lg overflow-y-auto flex-grow min-h-[200px]">

						{loading && <div role="status">
							<svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-50 mx-auto mb-4" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
								<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
							</svg>
							<span class="sr-only">Loading...</span>
						</div>
						}

						<p id="ai-result-text" className="text-gray-300 whitespace-pre-wrap">{text}</p>
					</div>
					<div className="mt-4 text-right">
						<button onClick={copyText} id="copy-result-button" className={showCopy ? "bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 hover:cursor-pointer transition-colors" : "hidden bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"}>Copier le texte</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App