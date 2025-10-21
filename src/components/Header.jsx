import { useState } from 'react'

const Header = () => {

	const [menu, setMenu] = useState(false)

	const showMenu = () => {
		setMenu(!menu)
	}

  return (
	<header className="glass-effect fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold tracking-wider">MD.</a>
            <nav className="hidden md:flex space-x-8 items-center">
                <a href="#about" className="hover:text-sky-400 transition-colors">À propos</a>
                <a href="#skills" className="hover:text-sky-400 transition-colors">Compétences</a>
                <a href="#projects" className="hover:text-sky-400 transition-colors">Projets</a>
                <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </nav>
            <button onClick={showMenu} id="mobile-menu-button" className="cursor-pointer md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <div id="mobile-menu" className={menu ? 'px-6 pb-4' : 'hidden md:hidden px-6 pb-4'}>
            <a href="#about" className="block py-2 text-center hover:bg-gray-700 rounded-md">À propos</a>
            <a href="#skills" className="block py-2 text-center hover:bg-gray-700 rounded-md">Compétences</a>
            <a href="#projects" className="block py-2 text-center hover:bg-gray-700 rounded-md">Projets</a>
            <a href="#contact" className="block py-2 text-center hover:bg-gray-700 rounded-md">Contact</a>
        </div>
    </header>
  )
}

export default Header