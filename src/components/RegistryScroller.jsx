import React from 'react';
import NodeRow from './NodeRow';

const RegistryScroller = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="registry-scroller">
      {tasks.length === 0 ? (
        <div className="registry-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M8 12h8"></path>
          </svg>
          <p>Your workspace is clear.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <NodeRow
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default RegistryScroller;
