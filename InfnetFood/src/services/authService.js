import { users } from '../data/users';

export const loginService = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userFound = users.find(
        (u) => u.email === email && u.password === password
      );

      if (userFound) {
        const { password, ...userData } = userFound;
        resolve({ success: true, user: userData });
      } else {
        resolve({ success: false, message: 'Email ou senha incorretos' });
      }
    }, 1000);
  });
};
