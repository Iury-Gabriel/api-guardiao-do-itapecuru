import User from '../models/User.js';

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

export { getAllUsers };