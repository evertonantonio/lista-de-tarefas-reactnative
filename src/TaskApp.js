import React, { useState } from 'react';
import { View } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';
import RemoveTask from './RemoveTask';
import UpdateTask from './UpdateTask';

const TaskApp = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };

  const handleUpdateTask = () => {
    setSelectedTask(null);
  };

  return (
    <View style={{marginTop: 60}}>
    <AddTask />
      <TaskList onSelectTask={handleSelectTask} />
      {selectedTask && (
        <>
          <RemoveTask id={selectedTask.id} />
          <UpdateTask
            id={selectedTask.id}
            description={selectedTask.descricao}
            onUpdate={handleUpdateTask}
          />
        </>
      )}
    </View>
  );
};

export default TaskApp;
