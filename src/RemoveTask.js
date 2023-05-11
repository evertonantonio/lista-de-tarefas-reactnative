import React from 'react';
import { Button } from 'react-native';
import { removeTask } from './api';

const RemoveTask = ({ id, onRemove }) => {
  const handleRemove = async () => {
    await removeTask(id);
    onRemove();
  };

  return <Button title="Remove" onPress={handleRemove} />;
};

export default RemoveTask;
