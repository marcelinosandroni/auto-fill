import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './features/auth/routes.js';
import { capturesRouter } from './features/captures/routes.js';
import { userRouter } from './features/user/routes.js';
import { healthRouter } from './api/routes/health.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/captures', capturesRouter);
app.use('/api/v1/user', userRouter);

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message: err.message || 'An unexpected error occurred',
    },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
