import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-600 body-font">
            <div className="container mx-auto py-4 px-8 flex flex-col lg:flex-row items-center justify-between">
                <p className="text-sm text-gray-500">
                    &copy; {currentYear} Jami Infante
                </p>
                <div className="flex mt-2 lg:mt-0">
                    <a
                        href="https://www.linkedin.com/in/jami-infante/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 mx-2"
                    >
                        <AiFillLinkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/Jami-INF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 mx-2"
                    >
                        <AiFillGithub size={20} />
                    </a>
                    <a
                        href="mailto:jamiinfante@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 mx-2"
                    >
                        <AiFillMail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
