import React from 'react';


const LightBall = () => (
  <div className="light-ball"></div>
);

const BallLights = () => {
  // Create an array to render multiple LightBall components
  const numberOfBalls = 10; // You can change this number as needed
  const lightBalls = Array.from({ length: numberOfBalls }, (_, index) => <LightBall key={index} />);

  return (
    <div className="ball-lights-container">
      {lightBalls}
    </div>
  );
};

export default BallLights;
