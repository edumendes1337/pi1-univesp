import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-projeto-integrador-pi.vercel.app/api/v1',
});

export const login = async (email, password) => {
  const res = await api.post('/login', { email, password });
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export const responder = async (dados) => {
  return await api.post('/responder', dados);
};

export const getRespostas = async () => {
  const token = localStorage.getItem('token');
  const res = await api.get('/respostas', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
