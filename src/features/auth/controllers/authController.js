import AuthService from '../services/authService.js';

class AuthController {
    async registerUser(req, res) {
        try {
            const user = await AuthService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const response = await AuthService.login(req.body);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default AuthController;
