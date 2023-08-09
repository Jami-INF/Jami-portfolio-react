import React from "react";
import TechnologySection from "./TechnologySection";
import {Fade} from "react-awesome-reveal";

const About = () => {
    return (
        <div>
            <div className="mb-24 mt-40 md:mx-60">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">A propos de moi</h2>

                <p className="text-center text-black dark:text-white mb-10 text-2xl">Je suis étudiant alternant en <strong className="text-slate-700 dark:text-slate-400">licence professionnelle métiers de l'informatique</strong>, application WEB à <strong className="text-slate-700 dark:text-slate-400"><a href="https://uca.fr/">l'IUT</a> de Clermont-Ferrand.</strong></p>
                <p className="text-center text-black dark:text-white text-2xl">Je ne me suis jamais éloigné du milieu de l’informatique depuis que je suis au lycée, au moment où j'ai fait mes premiers projets personnels et scolaires. </p>
                <p className="text-center text-black dark:text-white mb-10 text-2xl"> Cette curiosité envers l’informatique m’a permis de découvrir avant même de m’orienter dans l’informatique les différents langages de programmation de manière autodidacte.</p>
                <p className="text-center text-black dark:text-white mb-10 text-2xl">Je suis famillier avec les languages WEB tel que le <strong className="text-slate-700 dark:text-slate-400">PHP, JavaScript, HTML, CSS</strong> ainsi que différents frameworks</p>
            </div>
            <div className="mb-24">
                <TechnologySection/>

            </div>


        </div>
    )
}

export default About;