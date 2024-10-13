import express from 'express';
import { getAllUsers, createUser } from '../controllers/userRegister';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

export default router;
