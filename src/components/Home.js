import React from "react";
import {Fade} from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <div className="mb-40 mt-40">
                <div className="flex flex-col md:flex-row items-center"> {/* Added 'items-center' here */}
                    <div className="w-5/6 h-5/6 my-20 md-10 ml-10 md:-pr-32 md:pl-32">
                        <Fade left>
                        <h2 className="text-left text-black dark:text-white mb-10 text-6xl">Bienvenue,</h2>
                        </Fade>
                        <Fade right>
                            <h2 className="text-center text-black dark:text-white  text-4xl">Je m'appelle
                                <strong className="text-slate-700 dark:text-slate-400"> Jami</strong>
                            </h2>
                        </Fade>
                        <Fade left>
                        <h2 className="text-left text-black dark:text-white mt-20 text-4xl">Je suis <strong className="text-slate-700 dark:text-slate-400">développeur WEB</strong></h2>
                        </Fade>
                        </div>
                    <div className="w-5/6 h-5/6 md-10 ml-10 md:-pr-32 md:pr-32">
                        <img src="https://dgeodev.com/wp-content/uploads/2021/04/xdgeodev-banner-v2.png.pagespeed.ic.b31oFM_lwU.png" alt="Jami Infante" className=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;