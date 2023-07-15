import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillStar } from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <header
            className={`fixed top-0 z-10 w-full ${
                isScrolled ? 'bg-blur' : 'bg-gray-700'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-lg font-semibold">Jami Infante</span>
                </Link>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineHome style={{ marginBottom: '2px' }} />
                        Accueil
                    </Link>
                    <a href="https://github.com/Jami-INF"  className="text-white flex items-center hover:text-gray-300">
                        <CgGitFork style={{ marginBottom: '2px' }} />
                        Github
                    </a>
                    <Link to="/about" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineUser style={{ marginBottom: '2px' }} />
                        À propos de moi
                    </Link>
                    <Link to="/experiences" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} />
                        Expériences
                    </Link>
                    <Link to="/projects" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} />
                        Projets
                    </Link>
                    <Link to="/contact" className="text-white flex items-center hover:text-gray-300">
                        <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} />
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
