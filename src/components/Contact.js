import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import FranceMap from "./layout/FranceMap";

const Contact = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 dark:text-white text-lg font-medium title-font mb-5">Contactez-moi</h2>
                        <div className="flex mb-4">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                <AiFillMail size={20} />
                            </div>
                            <div className="flex-grow pl-6">
                                <p className="leading-relaxed">jamiinfante@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                <AiFillGithub size={20} />
                            </div>
                            <div className="flex-grow pl-6">
                                <a href="https://github.com/Jami-INF" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                <AiFillLinkedin size={20} />
                            </div>
                            <div className="flex-grow pl-6">
                                <a href="https://www.linkedin.com/in/jami-infante/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={() => window.location.href = "mailto:jamiinfante@gmail.com"}
                        >
                            Envoyer un mail
                        </button>
                    </div>
                    <div className="lg:w-2/4 md:w-1/2 bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <FranceMap />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
