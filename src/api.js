import useSWR from 'swr';

const API_URL = 'https://average-steam-production.up.railway.app';

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const useTasks = () => {
  const { data, error } = useSWR(`${API_URL}/listar`, fetcher);

  return {
    tasks: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const addTask = (task) =>
  fetch(`${API_URL}/cadastrar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

export const removeTask = (id) =>
  fetch(`${API_URL}/remover/${id}`, {
    method: 'DELETE',
  });

export const updateTask = (id, task) =>
  fetch(`${API_URL}/alterar/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
