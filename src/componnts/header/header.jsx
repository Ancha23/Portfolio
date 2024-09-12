
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="p-4  shadow-md text-xl bg-black">
                <div className="flex items-center justify-between">
                    {/* Logo ou título */}
                    <a href="#" className="text-xl font-bold ml-8">
                    <img
                        src="/img/LOGO.png"
                        alt="Logo"
                        className="w-32 h-auto max-w-full"
                    />
                    </a>

                    {/* Ícone de Menu para telas pequenas */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} weight="bold" />
                        ) : (
                            <List size={24} weight="bold" />
                        )}
                    </button>

                    <ul
                        className={`flex flex-col lg:flex-row mr-20 mt-2 lg:space-x-8 lg:items-center lg:justify-start absolute lg:static top-full left-0 w-full lg:w-auto lg:bg-transparent bg-white lg:p-0 p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    >
                        <li><Link to="/" className="block lg:inline-block font-bold text-white hover:text-green-400">HOME</Link></li>
                        <li><Link to="/about" className="block lg:inline-block font-bold text-white hover:text-blue-700">SOBRE MIM</Link></li>
                        <li><Link to="/myprojects" className="block lg:inline-block  font-bold text-white hover:text-blue-700">PROJECTOS</Link></li>
                        <li><Link to="/contact" className="block lg:inline-block font-bold text-white hover:text-blue-700">CONTACTOS</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
