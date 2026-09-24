import { Router } from 'express';
import { z } from 'zod';
import { RegisterUseCase, LoginUseCase } from './use-cases/AuthUseCases.js';

export const authRouter = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// POST /api/v1/auth/register
authRouter.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = registerSchema.parse(req.body);
    const useCase = new RegisterUseCase();
    const result = await useCase.execute(email, password, name);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/auth/login
authRouter.post('/login', async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const useCase = new LoginUseCase();
    const result = await useCase.execute(email, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
