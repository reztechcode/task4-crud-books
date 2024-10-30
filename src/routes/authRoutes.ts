import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

// Rute untuk registrasi pengguna
router.post('/register', register);

// Rute untuk login pengguna
router.post('/login', login);

export default router;
