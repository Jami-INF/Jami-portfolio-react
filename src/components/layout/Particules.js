import ParticlesConfig from "./ParticulesConfig";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import React from "react";

const Particules = (props) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    return (
        <div id="particle-background">
            <div className="background">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={ParticlesConfig}
                />
            </div>
        </div>
    );
};
export default Particules;
