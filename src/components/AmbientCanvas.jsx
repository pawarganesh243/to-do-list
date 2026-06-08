import React from 'react';

const AmbientCanvas = () => {
  return (
    <div className="ambient-canvas">
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
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
      <div className="gooey-container" style={{ filter: 'url(#goo)' }}>
        <div className="goo-sphere goo-sphere-1"></div>
        <div className="goo-sphere goo-sphere-2"></div>
        <div className="goo-sphere goo-sphere-3"></div>
        <div className="goo-sphere goo-sphere-4"></div>
        <div className="goo-sphere goo-sphere-5"></div>
      </div>
    </div>
  );
};

export default AmbientCanvas;
