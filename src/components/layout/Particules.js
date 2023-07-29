import ParticlesConfig from "./ParticulesConfig";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import React from "react";

const Particules = (props) => {
    const defaultTheme = "light";
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme ? savedTheme : defaultTheme;
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            return defaultTheme;
        }
    });

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const [particlesContainer, setParticlesContainer] = useState();

    const particlesLoaded = useCallback((container) => {
        setParticlesContainer(container);
    }, []);

    useEffect(() => {
        if (particlesContainer && particlesContainer.currentTheme !== theme) {
            particlesContainer.loadTheme(theme);
        }
    }, [theme, particlesContainer]);

    // Add a listener to update the theme when receiving a message
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.theme) {
                setTheme(event.data.theme);
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }
    }, [theme]);

    return (
        <div id="particle-background">
            <div className="background">
                <Particles
                    theme={theme}
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={ParticlesConfig}
                />
            </div>
        </div>
    );
};

export default Particules;
