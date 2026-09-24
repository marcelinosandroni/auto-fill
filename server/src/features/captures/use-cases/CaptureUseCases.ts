import { captureRepository } from '../repository/CaptureRepository.js';

export class ListCapturesUseCase {
  async execute(userId: string, limit = 50) {
    return captureRepository.findByUserId(userId, limit);
  }
}

export class CreateCaptureUseCase {
  async execute(
    userId: string,
    code: string,
    source: 'notification' | 'email' | 'clipboard',
    sourceDetail: string,
    type: 'otp' | 'token' | 'link' | 'password' = 'otp'
  ) {
    // Check daily limit for free users (would check user plan in production)
    const todayCount = await captureRepository.countTodayByUserId(userId);
    if (todayCount >= 50) {
      throw new Error('Daily limit reached. Upgrade to Pro for unlimited captures.');
    }

    return captureRepository.create({
      userId,
      code,
      source,
      sourceDetail,
      type,
    });
  }
}

export class DeleteCaptureUseCase {
  async execute(id: string, userId: string) {
    const deleted = await captureRepository.delete(id, userId);
    if (!deleted) {
      throw new Error('Capture not found');
    }
    return { success: true };
  }
}
