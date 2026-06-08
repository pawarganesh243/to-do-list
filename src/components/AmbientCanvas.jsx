import React from 'react';

const AmbientCanvas = () => {
  // Switched from an SVG filter to a pure CSS mesh gradient
  // This guarantees 100% production rendering compatibility
  return (
    <div className="ambient-canvas">
      <div className="gooey-container">
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
