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

    </div>
    )
}

export default Home;