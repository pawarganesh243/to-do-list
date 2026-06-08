import React, { useState, useEffect, useCallback } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import WorkspaceCard from './components/WorkspaceCard';

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('liquid-glass-tasks');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to parse tasks from localStorage:', error);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('liquid-glass-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = useCallback((text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTasks(prev => [newTask, ...prev]);
  }, []);

  const handleToggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }, []);

  const handleDeleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  return (
    <div className="app-container">
      <AmbientCanvas />
      <WorkspaceCard 
        tasks={tasks}
        onAddTask={handleAddTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
