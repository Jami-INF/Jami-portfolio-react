import React from "react";

const Home = () => {
    return (
        <div>
            <div className="mb-40 mt-40">
                <div className="flex flex-col md:flex-row items-center"> {/* Added 'items-center' here */}
                    <div className="w-5/6 h-5/6 my-20 md-10 ml-10 md:-pr-32 md:pl-32">
                        <h2 className="text-left text-black dark:text-white mb-10 text-6xl">Bienvenue,</h2>
                        <h2 className="text-center text-black dark:text-white  text-4xl">Je m'appelle
                            <strong className="text-slate-700 dark:text-slate-400"> Jami</strong>
                        </h2>
                    </div>
                    <div className="w-5/6 h-5/6 md-10 ml-10 md:-pr-32 md:pr-32">
                        <img src="https://dgeodev.com/wp-content/uploads/2021/04/xdgeodev-banner-v2.png.pagespeed.ic.b31oFM_lwU.png" alt="Jami Infante" className=""/>
                        {/*<h2 className="text-2xl text-black dark:text-white mb-10">ILLUSTRATION</h2>*/}
                    </div>
                </div>
            </div>

            <div className="mb-40 mt-40 md:mx-60">
            <h2 className="text-center text-black dark:text-white mb-10 text-6xl">À propos de moi</h2>
                <p className="text-center text-black dark:text-white mb-10 text-2xl">Je suis étudiant alternant en <strong className="text-slate-700 dark:text-slate-400">licence professionnelle métiers de l'informatique</strong>, application WEB à <strong className="text-slate-700 dark:text-slate-400"><a href="https://uca.fr/">l'IUT</a> de Clermont-Ferrand.</strong></p>
            <p className="text-center text-black dark:text-white text-2xl">Je ne me suis jamais éloigné du milieu de l’informatique depuis que je suis au lycée, au moment où j'ai fait mes premiers projets personnels et scolaires. </p>
                <p className="text-center text-black dark:text-white mb-10 text-2xl"> Cette curiosité envers l’informatique m’a permis de découvrir avant même de m’orienter dans l’informatique les différents langages de programmation de manière autodidacte.</p>
                <p className="text-center text-black dark:text-white mb-10 text-2xl">Je suis famillier avec les languages WEB tel que le <strong className="text-slate-700 dark:text-slate-400">PHP, JavaScript, HTML, CSS</strong> ainsi que différents framworks</p>
        </div>
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

export default Home;