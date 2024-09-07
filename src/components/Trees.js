import React from 'react';

export const Trees = () => {
  return (
    <>
      <a-entity position="0 5 -10">
        <a-cylinder color="#8B4513" height="0.5" radius="3" position="0 -0.25 0"></a-cylinder>
        <a-cone color="#228B22" height="2" radius-bottom="3" radius-top="0.5" position="0 1 0"></a-cone>
        <a-animation attribute="position" to="0 5.5 -10" direction="alternate" dur="4000" repeat="indefinite" easing="ease-in-out-cubic"></a-animation>
      </a-entity>

      <a-entity position="-5 3 -8">
        <a-cylinder color="#8B4513" height="0.5" radius="2" position="0 -0.25 0"></a-cylinder>
        <a-cone color="#228B22" height="1.5" radius-bottom="2" radius-top="0.3" position="0 0.75 0"></a-cone>
        <a-animation attribute="position" to="-5 3.5 -8" direction="alternate" dur="3000" repeat="indefinite" easing="ease-in-out-cubic"></a-animation>
      </a-entity>
    </>
  );
};
