import { useEffect, useState } from "react";
import { range } from "lodash";

let defaultConfig = {
  particles: 1500,
  widthRadius: 100,
  topHeightRadius: 80,
  bottomHeightRadius: 100,
  xThickness: 7,
  xRandomnessFactor: 2.2,
  xRandomnessShape: 2.2,
  xRandomness: 5,
  yThickness: 20,
  max_speed: 0.1,
  min_speed: -0.1,
};

const useParticlesConfig = (): any => {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  const isDebugMode = hash.includes("#debug");
  const [particles, setParticles] = useState(range(0, defaultConfig.particles));

  const [config, setConfig] = useState(defaultConfig);

  const handleSetConfig = (name, value) => {
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const init = async () => {
    if (!isDebugMode) return;
    // const dat = await import("dat.gui");
    // const gui = new dat.GUI();
    // const particlesFolder = gui.addFolder("Particles");
    // const shapeFolder = gui.addFolder("Shape");

    particlesFolder
      .add(config, "particles")
      .min(1)
      .max(5000)
      .step(1)
      .onChange((value) => {
        handleSetConfig("particles", value);
        setParticles(range(0, value));
      });
    shapeFolder
      .add(config, "widthRadius")
      .min(1)
      .max(200)
      .step(1)
      .onChange((value) => handleSetConfig("widthRadius", value));

    // add desired folders and parameters

    particlesFolder.open();
    shapeFolder.open();
  };

  useEffect(() => {
    init();
  }, []);

  return { config, handleSetConfig, particles, setParticles, isDebugMode };
};

export default useParticlesConfig;
