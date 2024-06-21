import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController.js";
import { loginUser } from "./controllers/LoginUser.js";

const router = Router();

router.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

router.post('/auth/register', CreateUserController.register);
router.post('/auth/login', loginUser);

export { router };
