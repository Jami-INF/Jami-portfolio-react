import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal"; // Importez l'animation Fade

const CardProject = ({ title, description, stack, imagePath, projectURL, direction }) => {
    const isImageOnLeft = direction === "left";

    return (
        <div className="p-4 mb-4 text-center">
            <Fade left={isImageOnLeft} right={!isImageOnLeft}> {/* Utilisez Fade avec les propriétés left ou right en fonction de la direction */}
                <div className={`bg-white dark:bg-gray-900 dark:backdrop-blur-sm dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg flex items-center justify-between flex-col md:flex-row ${isImageOnLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <img
                        src={imagePath}
                        alt={title}
                        className="w-96 h-64 object-cover mt-4 md:mt-0 p-6 rounded-lg"
                    />
                    <div className="flex flex-col p-6">
                        <h2 className="text-xl text-black dark:text-white font-semibold mb-2">{title}</h2>
                        <p className="indent-4 text-black dark:text-white mb-8 text-justify">{description}</p>
                        <div className="mb-8 justify-left">
                            {stack.split(",").map((tech, index) => (
                                <span key={index} className="border-2 border-blue-500 text-black dark:text-white font-bold py-2 px-4 rounded-full text-sm mr-2 mb-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link to={projectURL} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Voir le projet
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CardProject;
