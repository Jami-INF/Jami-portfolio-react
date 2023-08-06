import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import FranceMap from "./FranceMap";

const Contact = () => {
    return (
        <div>
            <div className="w-full 2xl:px-32 lg:px-12 px-5 py-24 mx-auto flex flex-wrap items-center justify-center ">

                    <div className="md:w-4/12 h-min bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg flex flex-col w-full mt-10">
                        <div className="w-full h-full p-8 ">
                            <h2 className="text-gray-900 dark:text-white text-lg font-medium title-font mb-5">Contactez-moi</h2>
                            <div className="flex mb-4">
                                <a href="mailto:jamiinfante@gmail.com" className="text-blue-500 w-11/12 flex items-center" target="_blank" rel="noopener noreferrer">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <AiFillMail size={20} />
                                    </div>
                                    <div className="ml-2 text-gray-900 dark:text-white">
                                        jamiinfante@gmail.com
                                    </div>
                                </a>

                            </div>
                            <div className="flex mb-4">
                                <a href="https://github.com/Jami-INF" className="text-blue-500 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <AiFillGithub size={20} />
                                    </div>
                                    <div className="ml-2 text-gray-900 dark:text-white">
                                            GitHub
                                    </div>
                                </a>

                            </div>
                            <div className="flex mb-4">
                                <a href="https://www.linkedin.com/in/jami-infante/" className="text-blue-500 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <AiFillLinkedin size={20} />
                                    </div>
                                    <div className="ml-2 text-gray-900 dark:text-white">
                                            LinkedIn
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-7/12 bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg flex flex-col md:ml-auto w-full mt-10">
                        <FranceMap />
                    </div>

            </div>
        </div>
    );
};

export default Contact;
