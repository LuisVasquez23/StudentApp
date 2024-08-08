import express from 'express';
import AuthController from '../controllers/authController.js';
import { registerValidator, loginValidator } from '../validators/authValidator.js';
import validationMiddleware from '../../../middleware/validationMiddleware.js';


const router = express.Router();

router.post('/register', registerValidator, validationMiddleware, AuthController.registerUser);
router.post('/login', loginValidator, validationMiddleware, AuthController.loginUser);


export default router;
