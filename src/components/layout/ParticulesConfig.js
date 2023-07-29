const ParticulesConfig = {
  autoplay: true,
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.4,
        size: 40
      },
      push: {
        quantity: 1
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#777"
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 2000
      },
      value: 90
    },
    opacity: {
      value: 0.4
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 5
    }
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light"
      },
      options: {
        background: {
          color: "#CFCFCF"
        },
        particles: {
          color: {
            value: "#000000"
          }
        }
      }
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark"
      },
      options: {
        background: {
          color: "1f2937"
        },
        particles: {
          color: {
            value: "#ffffff"
          }
        }
      }
    }
  ],
  detectRetina: true
};
export default ParticulesConfig;
