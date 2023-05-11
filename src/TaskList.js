import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Button, TextInput } from 'react-native';
import { removeTask, useTasks } from './api';
import useSWR, { mutate } from 'swr';
import RemoveTask from './RemoveTask';

const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null); // estado para guardar a tarefa selecionada
  const { tasks, isLoading, isError } = useTasks();

  const handleEdit = () => {
    // código para editar a tarefa selecionada
    console.log(`Edit task ${selectedTask.id} with description ${selectedTask.descricao}`);
    setSelectedTask(null);
  };

  const handleDelete = async (task) => {
    await removeTask(task.id);
    console.log(`Delete task ${task.id} with description ${task.descricao}`);
    setSelectedTask(null);
    mutate('/api/tasks');
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error loading tasks</Text>;
  }

  return (
    <View >
        {selectedTask && (
        <View >
          <TextInput
            value={selectedTask.descricao}
            onChangeText={(text) => setSelectedTask({ ...selectedTask, descricao: text })}
            placeholder="Tarefa"
          />
        </View>
      )}
      {tasks.map((task) => (
        <View key={task.id} style={{marginTop: 30}} >
          <Text>{task.descricao}</Text>
          <RemoveTask id={task.id} onRemove={() => mutate('https://average-steam-production.up.railway.app/listar')} />
        </View>
      ))}
    </View>
  );
};

export default TaskList;
