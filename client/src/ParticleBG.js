import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from './configs/particle-config';

const ParticleBG = () => {
  return (
    <div>
      <Particles params={particleConfig}> </Particles>
    </div>
  );
};

export default ParticleBG;