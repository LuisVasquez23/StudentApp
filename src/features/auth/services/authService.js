import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import jwtConfig from '../../../config/jwtConfiguration.js';


class AuthService{
    async register(userDto){
        
        const {username , password } = userDto;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        return user;

    }

    async login({ username, password }) {
        const user = await User.findOne({ where: { username } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: '1h' });
        return { user , token};
    }
}

export default new AuthService();