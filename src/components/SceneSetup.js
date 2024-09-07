import React from 'react';

export const SceneSetup = () => {
  return (
    <a-scene>
      <a-entity environment="preset: forest; groundTexture: squares; grid: cross"></a-entity>

      <a-entity camera look-controls="touchEnabled: true" position="0 1.6 5">
        <a-cursor></a-cursor>
      </a-entity>

      <a-text value="Welcome to 3D World!" position="-2 4 -3" color="black" scale="1.5 1.5 1.5"></a-text>

      <a-light type="ambient" color="#445451"></a-light>
      <a-light type="point" intensity="2" position="2 4 4"></a-light>
    </a-scene>
  );
};
