import React from 'react';

const NodeRow = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`node-row ${task.completed ? 'is-finished' : ''}`}>
      <label className="node-trigger-group">
        <input
          type="checkbox"
          className="node-trigger-hidden"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div className="node-trigger-visual">
          <svg className="node-trigger-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </label>
      <span 
        className="node-label" 
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button 
        className="node-action-delete" 
        onClick={() => onDelete(task.id)}
        aria-label="Delete Task"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
};

export default NodeRow;
