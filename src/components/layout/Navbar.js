import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineCoffee,
    AiOutlineMessage
} from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';
import logo from '../../assets/logo.png';
import Switcher from '../darkMod/Switcher';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isWindowScrolled = window.scrollY > 0;
            setIsScrolled(isWindowScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 z-10 w-full bg-gray-700 ${
                isScrolled ? 'backdrop-blur-sm bg-opacity-60' : 'backdrop-blur-none'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-lg font-semibold">Jami Infante</span>
                </Link>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu ordinateur */}
                <nav className="hidden lg:flex space-x-4">
                    <Link to="/" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineHome style={{marginRight: "5px"}} />
                        Accueil
                    </Link>

                    <Link
                        to="/about"
                        className="text-white flex items-center hover:text-gray-300"
                    >
                        <AiOutlineFundProjectionScreen style={{marginRight: "5px"}} />
                        À propos
                    </Link>
                    <Link to="/projects" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineCoffee style={{marginRight: "5px"}} />
                        Projets
                    </Link>
                    <Link to="/contact" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineMessage style={{marginRight: "5px"}} />
                        Contact
                    </Link>
                    <a
                        href="https://github.com/Jami-INF"
                        className="text-white flex items-center hover:text-gray-300"
                    >
                        <CgGitFork style={{marginRight: "5px"}} />
                        Github
                    </a>
                    <Switcher />
                </nav>

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div
                        className={`fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 ${
                            isScrolled ? 'backdrop-blur-sm' : ''
                        }`}
                    >
                        <div className="flex flex-col justify-center h-full">
                            <Link
                                to="/"
                                className="text-white text-center py-4 hover:text-gray-300"
                                onClick={toggleMobileMenu}
                            >
                                Accueil
                            </Link>

                            <Link
                                to="/about"
                                className="text-white text-center py-4 hover:text-gray-300"
                                onClick={toggleMobileMenu}
                            >
                                À propos
                            </Link>
                            <Link
                                to="/projects"
                                className="text-white text-center py-4 hover:text-gray-300"
                                onClick={toggleMobileMenu}
                            >
                                Projets
                            </Link>
                            <Link
                                to="/contact"
                                className="text-white text-center py-4 hover:text-gray-300"
                                onClick={toggleMobileMenu}
                            >
                                Contact
                            </Link>
                            <a
                                href="https://github.com/Jami-INF"
                                className="text-white text-center py-4 hover:text-gray-300"
                                onClick={toggleMobileMenu}
                            >
                                Github
                            </a>
                            <div className="flex justify-center py-4">
                                <Switcher />
                            </div>
                            <div className={`border-t border-gray-800`} />
                            <div className="flex justify-center py-4">
                                <button
                                    type="button"
                                    className="text-white hover:text-gray-300 focus:outline-none"
                                    onClick={toggleMobileMenu}
                                >
                                    Fermer le menu
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default NavBar;
