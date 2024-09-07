import React from 'react';

export const Shapes = () => {
  return (
    <>
      <a-entity position="-3 1 -3">
        <a-box
          color="#4CC3D9"
          depth="1"
          height="1"
          width="1"
          animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000"
          animation__scale="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 2000; loop: true"
          event-set__enter="_event: mouseenter; color: #EF2D5E"
          event-set__leave="_event: mouseleave; color: #4CC3D9"
        ></a-box>
      </a-entity>

      <a-entity position="0 1.25 -5">
        <a-sphere
          color="#EF2D5E"
          radius="1.25"
          animation__bounce="property: position; to: 0 2 -5; dir: alternate; dur: 2000; loop: true"
          animation__color="property: color; from: #EF2D5E; to: #84D2F6; dur: 3000; loop: true"
        ></a-sphere>
      </a-entity>
    </>
  );
};
