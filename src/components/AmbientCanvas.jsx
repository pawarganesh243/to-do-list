import React from 'react';

const AmbientCanvas = () => {
  return (
    <>
      <svg width="0" height="0" className="goo-filter">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -30" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
      <div className="ambient-canvas">
        <div className="gooey-container">
          <div className="goo-sphere goo-sphere-1"></div>
          <div className="goo-sphere goo-sphere-2"></div>
          <div className="goo-sphere goo-sphere-3"></div>
          <div className="goo-sphere goo-sphere-4"></div>
          <div className="goo-sphere goo-sphere-5"></div>
        </div>
      </div>
    </>
  );
};

export default AmbientCanvas;
