import React from "react";
import {AiOutlineHtml5, AiFillGithub} from 'react-icons/ai';
import {FaJava, FaReact, FaNodeJs, FaDatabase, FaPhp } from 'react-icons/fa';
import {BiLogoJavascript, BiLogoPython, BiLogoTailwindCss} from "react-icons/bi";
import {DiCss3} from "react-icons/di";
import {SiMysql, SiPostman, SiSpring} from "react-icons/si";
import {BsGit} from "react-icons/bs";
import {TbBrandVscode} from "react-icons/tb";
import {Fade} from "react-awesome-reveal";


const TechnologySection = () => {
    const technologies = [
        {
            label: "Languages",
            icons: [<FaPhp />, <FaJava />, <BiLogoJavascript />, <BiLogoPython />],
            description: "Mes langages de programmation préférés sont PHP, JavaScript, Java et Python. J'ai également de l'expérience avec C, C#, Python et bien d'autres.",
        },
        {
            label: "Front-end",
            icons: [<AiOutlineHtml5 />, <FaReact />, <DiCss3 />, <BiLogoTailwindCss />],
            description: "J'aime beaucoup utiliser HTML, React, Vue.js, CSS et Tailwind pour créer des interfaces utilisateur.",
        },
        {
            label: "Back-end",
            icons: [<SiMysql />, <FaNodeJs />, <FaDatabase />, <SiSpring />],
            description: "Mes technologies back-end préférées sont Node.js, Express, MongoDB et MySQL. J'ai également de l'expérience avec PHP, Laravel, et bien d'autres.",
        },
        {
            label: "Outils",
            icons: [<BsGit />, <TbBrandVscode />, <SiPostman />, <AiFillGithub />],
            description: "J'utilise Git, GitHub, VS Code, Postman, et bien d'autres outils pour créer des applications.",
        },
    ];

    return (

    <div className="container mx-auto py-12 px-4 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
                <Fade>
                    <div key={index} className="text-gray-800 dark:text-white p-4 bg-white dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm bg-opacity-40 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{tech.label}</h3>
                        <div className="flex justify-center mb-4">
                            {tech.icons.map((icon, i) => (
                                <div key={i} className="text-5xl mr-4 text-blue-500">
                                    {icon}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-800 dark:text-white">{tech.description}</p>
                    </div>
                </Fade>
            ))}
        </div>
    </div>
    );
};

export default TechnologySection;
