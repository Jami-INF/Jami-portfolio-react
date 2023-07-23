import React from "react";

const About = () => {
    return (
        <div>
            <div className="mb-40 mt-40 text-left  md:mx-60">
                <h2 className="text-center text-black dark:text-white mb-10 text-6xl">Études</h2>
                <ol className="m-20 relative border-l border-gray-200 dark:border-gray-700">
                    <li className="ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022-2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Licence pro Application
                            WEB</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Développement de services web, Servlet/JSP, Spring Boot, Quarkus. Applications PHP, Symfony, ReactJS, React Native. Bases de données SQL, noSQL. IOT, (ESP, LORA, SIGFOX), gestion de projet, tests unitaires, d’intégration…</p>
                    </li>
                    <li className="ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020-2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">DUT INFORMATIQUE</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">C, Programmation Orientée
                            Objets (Java, C#, C++), IHM (XAML, XML), UML, Merise, .NET, Linux, Shell, bases de données
                            (PL/SQL, SQL, PRO-C ORACLE), Programmation Web (PHP, JS, HTML, CSS)</p>
                    </li>
                    <li className="ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019-2020
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">BACCALAURÉAT STI2D OPTION
                            SIN</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Première et terminale en
                            option Système d'Information et Numérique (SIN) Arduino, python, réseau, Codages binaires,
                            hexadécimal, ASCII</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default About;