import 'aframe';
import 'aframe-environment-component';
import 'aframe-extras';

import React from 'react';

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-sky color="#87CEEB"></a-sky>

        <a-entity environment="preset: forest; groundTexture: squares; grid: cross; dressingAmount: 100;"></a-entity>

        <a-entity teleport-controls="button: trigger; collisionEntities: #floor"></a-entity>

        {/* Main Camera */}
        <a-entity camera="look-controls" wasd-controls="true" position="0 1.6 5">
          <a-cursor></a-cursor>
        </a-entity>

        <a-entity position="0 5 -10">
          <a-cylinder color="#8B4513" height="0.5" radius="3" position="0 -0.25 0"></a-cylinder>
          <a-cone color="#228B22" height="2" radius-bottom="3" radius-top="0.5" position="0 1 0"></a-cone>
          <a-animation attribute="position" to="0 5.5 -10" direction="alternate" dur="4000" repeat="indefinite" easing="easeInOutQuad"></a-animation>
        </a-entity>

        <a-entity position="-5 3 -8">
          <a-cylinder color="#8B4513" height="0.5" radius="2" position="0 -0.25 0"></a-cylinder>
          <a-cone color="#228B22" height="1.5" radius-bottom="2" radius-top="0.3" position="0 0.75 0"></a-cone>
          <a-animation attribute="position" to="-5 3.5 -8" direction="alternate" dur="3000" repeat="indefinite" easing="easeInOutQuad"></a-animation>
        </a-entity>

        <a-entity position="-3 1 -3">
          <a-box
            id="box1"
            color="#4CC3D9"
            depth="1"
            height="1"
            width="1"
            animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000"
            animation__scale="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 2000; loop: true"
            event-set__enter="_event: mouseenter; color: #EF2D5E"
            event-set__leave="_event: mouseleave; color: #4CC3D9"
            event-set__click="color: #FFD700; scale: 1.5 1.5 1.5"
          ></a-box>
        </a-entity>

        {/* Interactive Box 2 */}
        <a-entity position="3 1 -3">
          <a-box
            color="#FFC65D"
            depth="1"
            height="1"
            width="1"
            animation__rotate="property: rotation; to: 360 360 0; loop: true; dur: 15000"
            animation__scale="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 2000; loop: true"
            event-set__enter="_event: mouseenter; color: #EF2D5E"
            event-set__leave="_event: mouseleave; color: #FFC65D"
          ></a-box>
        </a-entity>

        {/* Sphere with sound and bounce */}
        <a-entity position="0 1.25 -5">
          <a-sphere
            color="#EF2D5E"
            radius="1.25"
            animation__bounce="property: position; to: 0 2 -5; dir: alternate; dur: 2000; loop: true"
            animation__color="property: color; from: #EF2D5E; to: #84D2F6; dur: 3000; loop: true"
          ></a-sphere>

          {/* Sound component */}
          <a-sound src="url(path_to_sound.mp3)" autoplay="true" loop="true"></a-sound>
        </a-entity>

        {/* Particle System */}
        <a-entity position="0 2.25 -5" particle-system="color: #EF3D5E,#32CD32; size: 1; velocityValue: 0.1 0.3 0.1"></a-entity>

        {/* Text Animation */}
        <a-text
          value="You have Entered VR World!"
          position="-2 4 -3"
          color="black"
          scale="3 3 3"
          animation="property: position; to: -2 4.2 -3; direction: alternate; dur: 2000; repeat: indefinite; easing: easeInOutQuad"
        ></a-text>

        <a-light type="ambient" color="#445451"></a-light>
        <a-light type="point" intensity="2" position="2 4 4"></a-light>

        <a-entity
          geometry="primitive: circle; radius: 0.5"
          material="color: blue; opacity: 0.5"
          position="2 0 -6"
          event-set__click="position: 2 0.5 -6"
        ></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
