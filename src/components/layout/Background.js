import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#000000", // Set the background color here
                    },
                },
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    shape: {
                        type: "star",
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default Background;
