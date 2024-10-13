import { getUsers, addUser } from '../services/userRegisterService';

export const getAllUsers = async (req:any, res:any) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
};

export const createUser = async (req:any, res:any) => {
  try {
    const { email, name , country } = req.body;
    const newUser = await addUser({ email, name });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed' });
  }
};
