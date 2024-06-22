import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt for email: ${email}`); // Debugging line

    const user = await User.findOne({ email });
    const SECRET = 'itapecurutools'; 

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    console.log(`User found: ${user}`); // Debugging line
    console.log(`User password: ${user.password}`); // Debugging line
    console.log(`Password attempt: ${password}`); // Debugging line

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: 600 });
    res.status(200).json({ 
      message: 'Login bem-sucedido!', 
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        ageRange: user.ageRange,
        token
      } 
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

function verifyJWT(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  })
}

export { loginUser, verifyJWT };
