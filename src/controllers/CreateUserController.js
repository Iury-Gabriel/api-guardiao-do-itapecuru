import User from "../models/User.js";
import bcrypt from "bcryptjs";

class CreateUserController {
  async register(req, res) {
    const { username, gender, ageRange, email, password } = req.body;
    // Para verificar se o usuário já está cadastrado
    const userExists = await User.findOne({ email });

    const userExistsUsername = await User.findOne({ username });

    if (userExistsUsername) {
      return res.status(400).json({ error: 'O nome de usuário já existe' });
    }
    
    if (userExists) {
      return res.status(400).json({ error: 'O usuário já existe' });
    }

    // Para cadastrar um usuário novo
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      username,
      gender,
      ageRange
    });

    try {
      await user.save();
      return res.status(201).json({ message: 'Usuario criado com sucesso!', user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        ageRange: user.ageRange
      } });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}

export default new CreateUserController();