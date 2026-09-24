import { Router } from 'express';
import { z } from 'zod';
import { authMiddleware, type AuthRequest } from '../../core/middleware/auth.js';
import { userRepository } from '../auth/repository/UserRepository.js';

export const userRouter = Router();
userRouter.use(authMiddleware);

// GET /api/v1/user/profile
userRouter.get('/profile', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const user = await userRepository.findById(userId);
    if (!user) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'User not found' } });
    }
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/v1/user/plan
userRouter.get('/plan', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const user = await userRepository.findById(userId);
    if (!user) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'User not found' } });
    }
    
    const planDetails = {
      free: {
        name: 'Free',
        autoFillsPerDay: 50,
        devices: 1,
        sources: 2,
        history: '7 days',
        price: 0,
      },
      pro: {
        name: 'Pro',
        autoFillsPerDay: 'unlimited',
        devices: 3,
        sources: 'all',
        history: 'unlimited',
        price: 4.99,
      },
      enterprise: {
        name: 'Enterprise',
        autoFillsPerDay: 'unlimited',
        devices: 'unlimited',
        sources: 'all',
        history: 'unlimited',
        price: 'custom',
      },
    };

    res.json({
      currentPlan: user.plan,
      details: planDetails[user.plan],
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/user/plan/upgrade
userRouter.post('/plan/upgrade', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const { plan } = z.object({ plan: z.enum(['free', 'pro', 'enterprise']) }).parse(req.body);
    
    await userRepository.updatePlan(userId, plan);
    
    res.json({
      success: true,
      message: `Plan upgraded to ${plan}`,
      newPlan: plan,
    });
  } catch (error) {
    next(error);
  }
});
