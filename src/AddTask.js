import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTask } from './api';
import useSWR, { mutate } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const AddTask = () => {
  const [descricao, setDescricao] = useState('');
  const { data } = useSWR('https://average-steam-production.up.railway.app/listar', fetcher);

  const handleSubmit = async () => {
    await addTask({ descricao });
    setDescricao('');
    mutate('https://average-steam-production.up.railway.app/listar', [...data, { descricao }], false);
  };

  return (
    <View>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Tarefa"
      />
      <Button title="Adicionar" onPress={handleSubmit} />
    </View>
  );
};

export default AddTask;
