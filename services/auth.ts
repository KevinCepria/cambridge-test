import { fetchUsers } from '@/services/api';

export const login = async (username: string, password: string) => {
  const users = await fetchUsers();
  const user = users.find((user) => user.username === username && user.email === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user)); // Store user session
    return user;
  }
  throw new Error('Invalid credentials');
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};
