import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const [theme, setTheme] = useState(localStorage.theme || "dark");
    useEffect(() => {
        setTheme(localStorage.theme || "dark");
        const handleMessage = (event) => {
            if (event.data.theme) {
                setTheme(event.data.theme);
            }
        };
        window.addEventListener("message", handleMessage);
    }, [theme]);
    const particleColor = theme === "dark" ? "#ffffff" : "#000000";
    const backgroundColor = theme === "dark" ? "#1f2937" : "#CFCFCF";

    const particlesInit = async (engine) => {
        await loadFull(engine);
    };
    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: particleColor, // Use the dynamically set particleColor based on the theme
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.4,
                    },
                    size: {
                        value: 3,
                        random: {
                            enable: true,
                            minimumValue: 1,
                        },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        outMode: "out",
                    },
                },
                detectRetina: true,
                background: {
                    color: backgroundColor, // Use the dynamically set backgroundColor based on the theme
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                },
            }}
        />
    );
};

export default Particle;
