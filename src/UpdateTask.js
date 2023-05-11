import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateTask } from './api';

const UpdateTask = ({ id, description: initialDescription, onUpdate }) => {
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = () => {
    updateTask(id, { description });
    onUpdate();
  };

  return (
    <View>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="descricao"
      />
      <Button title="Update" onPress={handleSubmit} />
    </View>
  );
};

export default UpdateTask;
