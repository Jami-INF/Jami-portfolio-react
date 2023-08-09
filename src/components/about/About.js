import React from "react";
import TechnologySection from "./TechnologySection";
import {Fade} from "react-awesome-reveal";
import JamRacing from "../../assets/projects/JamRacing.jpg";
import Basic from "../../assets/projects/basic.jpg";
import Mecanic from "../../assets/projects/mecanique.jpg";
import Phone from "../../assets/projects/atelier.avif";
import Hobby from "./Hobby";

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
            <div>
                <div className="container mx-auto py-12 px-4 dark:text-white">
                    <Fade direction="up" triggerOnce>
                        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">Mes loisirs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                            <Hobby
                                title="Mécanique automobile"
                                description="Étant un grand fan d'automobile et étant assez manuel, j'ai appris par moi-même à l'aide d'internet à faire l'entretien de ma voiture personnelle ainsi que celle de mes parents. Cette passion prend beaucoup de temps mais et très gratifiante."
                                imgSrc={Mecanic}
                            />
                            <Hobby
                                title="Jeux vidéo"
                                description="J'adore jouer à des jeux vidéo, surtout avec mes amis. Ce que j'aime particulièrement, ce sont les jeux de simulation réaliste, car ils me font me sentir vraiment immergé. D'ailleurs, j'ai fabriqué mon propre simulateur de conduite en utilisant des tubes de fer soudés."
                                imgSrc={JamRacing}
                            />

                            <Hobby
                                title="Réparation de smartphones"
                                description="La réparation d'appareils électroniques m'intéresse depuis mon enfance ou mon père ma transmis cette passion du bricolage qui m'est resté. Depuis, je répare tout type d'objet électronique mais plus particulièrement des smartphones. Ce hobby requière une grande dextérité, beaucoup de concentration et de précision."
                                imgSrc={Phone}
                            />
                            <Hobby
                                title="Sport en salle"
                                description="Je pratique la musculation depuis 1 an et demi. J'ai décidé de commencé au début de mon stage de deuxième année et depuis, j'y vais trois fois par semaine."
                                imgSrc={Basic}
                            />


                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default About;