import bcrypt from 'bcryptjs';
import { userRepository } from '../repository/UserRepository.js';
import { generateAccessToken, generateRefreshToken } from '../../core/auth/jwt.js';

export class RegisterUseCase {
  async execute(email: string, password: string, name: string) {
    // Check if user exists
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await userRepository.create(email, passwordHash, name);

    // Generate tokens
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan,
      },
      accessToken,
      refreshToken,
    };
  }
}

export class LoginUseCase {
  async execute(email: string, password: string) {
    // Find user
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan,
      },
      accessToken,
      refreshToken,
    };
  }
}
