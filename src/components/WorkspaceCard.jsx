import React from 'react';
import ComposerGroup from './ComposerGroup';
import RegistryScroller from './RegistryScroller';

const WorkspaceCard = ({ tasks, onAddTask, onToggleTask, onDeleteTask }) => {
  return (
    <div className="workspace-card">
      <div className="workspace-header">
        <h1 className="workspace-title">Focus</h1>
        <p className="workspace-subtitle">What will you accomplish today?</p>
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
