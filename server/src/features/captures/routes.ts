import { Router } from 'express';
import { z } from 'zod';
import { authMiddleware, type AuthRequest } from '../../core/middleware/auth.js';
import { ListCapturesUseCase, CreateCaptureUseCase, DeleteCaptureUseCase } from './use-cases/CaptureUseCases.js';

export const capturesRouter = Router();
capturesRouter.use(authMiddleware);

const createCaptureSchema = z.object({
  code: z.string(),
  source: z.enum(['notification', 'email', 'clipboard']),
  sourceDetail: z.string(),
  type: z.enum(['otp', 'token', 'link', 'password']).optional(),
});

// GET /api/v1/captures
capturesRouter.get('/', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const limit = parseInt(req.query.limit as string) || 50;
    const useCase = new ListCapturesUseCase();
    const captures = await useCase.execute(userId, limit);
    res.json({ captures });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/captures
capturesRouter.post('/', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const { code, source, sourceDetail, type } = createCaptureSchema.parse(req.body);
    const useCase = new CreateCaptureUseCase();
    const capture = await useCase.execute(userId, code, source, sourceDetail, type);
    res.status(201).json({ capture });
  } catch (error) {
    next(error);
  }
});

// DELETE /api/v1/captures/:id
capturesRouter.delete('/:id', async (req: AuthRequest, res, next) => {
  try {
    const userId = req.userId!;
    const { id } = req.params;
    const useCase = new DeleteCaptureUseCase();
    const result = await useCase.execute(id, userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
