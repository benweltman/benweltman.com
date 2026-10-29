import React from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '../../hooks/useTheme';

const ParticleBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const options = {
    fullScreen: { enable: false },
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: isDark ? "#e2e8f0" : "#1e293b", // Off-white in dark mode, off-black (Slate 800) in light mode
      },
      links: {
        color: isDark ? "#e2e8f0" : "#1e293b",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  } as const;

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <Particles
        key={theme}
        id="tsparticles"
        init={loadSlim}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
