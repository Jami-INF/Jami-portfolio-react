import { Fade } from "react-awesome-reveal";
import React from "react";
import Study from "./Study";
import Work from "./Work";
import NTLogo from "../../assets/logos/NT-logo.png";
import FLDLogo from "../../assets/logos/FLD-logo.png";
import EFFLogo from "../../assets/logos/EFF-logo.png";

const Experiences = () => {
    return (
        <div>
            <div className="mb-24 text-left mt-40 md:mx-60">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Études</h2>
                <Fade>
                    <ol className="m-2 relative border-l border-gray-200 dark:border-gray-700">
                        <Study
                            date="2022-2023"
                            title="Licence pro Application WEB"
                            description="Développement de services web, Servlet/JSP, Spring Boot, Quarkus. Applications PHP, Symfony, ReactJS, React Native. Bases de données SQL, noSQL. IOT, (ESP, LORA, SIGFOX), gestion de projet, tests unitaires, d’intégration…"
                        />
                        <Study
                            date="2020-2022"
                            title="DUT INFORMATIQUE"
                            description="C, Programmation Orientée Objets (Java, C#, C++), IHM (XAML, XML), UML, Merise, .NET, Linux, Shell, bases de données (PL/SQL, SQL, PRO-C ORACLE), Programmation Web (PHP, JS, HTML, CSS)"
                        />
                        <Study
                            date="2019-2020"
                            title="BACCALAURÉAT STI2D OPTION SIN"
                            description="Première et terminale en option Système d'Information et Numérique (SIN) Arduino, python, réseau, Codages binaires, hexadécimal, ASCII"
                        />
                    </ol>
                </Fade>
            </div>
            <div className="mb-24 text-left mt-40 md:mx-60">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Expériences</h2>
                <Fade>
                    <ol className="list-none p-0">
                        <Work
                            logoSrc={EFFLogo}
                            title="Développeur WEB - EMIL FREY FRANCE (P.B.O)"
                            date="2024-now"
                            description="Développement et déploiement d'un site de vente de pièces automobile en ligne pour plusieurs clients"
                        />
                        <Work
                            logoSrc={FLDLogo}
                            title="Développeur WEB - FLAURAUD - AURILIS GROUP"
                            date="2023-2024"
                            description="Développement sur le site de vente de pièces automobile en ligne"
                        />
                        <Work
                            logoSrc={NTLogo}
                            title="Alternance - Développeur WEB - NUMTECH"
                            date="2022-2023"
                            description="Développement sur différents projets internes et pour des clients orienté Web. Languages : PHP, JS, HTML, CSS"
                        />
                        <Work
                            logoSrc={NTLogo}
                            title="Job d'été chez Numtech - Assistant Ingénieur - NUMTECH"
                            date="2022"
                            description="Développement sur différents projets internes et pour des clients orienté Web. Languages : PHP, JS, HTML, CSS. Réalisations de diverses tâches pour un client (Data treatment). Continuation et aboutissement du développement de l'outil de gestion interne commencés précédemment lors du stage"
                        />
                        <Work
                            logoSrc={NTLogo}
                            title="Stage de 10 semaines - Développeur WEB - NUMTECH"
                            date="2022"
                            description="Développement d’un outil de gestion interne. Analyse de l'existant, analyse des besoins, développement en PHP utilisant le modèle MVC, JS, HTML, CSS. Dans ce stage, ma mission était de créer ou reprendre le développement d’un outil de gestion interne..."
                        />
                    </ol>
                </Fade>
            </div>
        </div>
    )
}
export default Experiences;