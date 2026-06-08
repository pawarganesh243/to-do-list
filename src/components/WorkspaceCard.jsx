import React from 'react';
import ComposerGroup from './ComposerGroup';
import RegistryScroller from './RegistryScroller';

const WorkspaceCard = ({ tasks, onAddTask, onToggleTask, onDeleteTask, onClearAll }) => {
  return (
    <div 
      className="workspace-card"
      style={{
        background: 'rgba(15, 30, 60, 0.45)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)'
      }}
    >
      <div className="workspace-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="workspace-title">Focus</h1>
          <p className="workspace-subtitle">What will you accomplish today?</p>
        </div>
        {tasks.length > 0 && (
          <button className="clear-all-btn" onClick={onClearAll} title="Clear all tasks">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Clear All
          </button>
        )}
      </div>
      
      <ComposerGroup onAdd={onAddTask} />
      
      <RegistryScroller 
        tasks={tasks}
        onToggle={onToggleTask}
        onDelete={onDeleteTask}
      />
    </div>
  );
};

export default WorkspaceCard;
