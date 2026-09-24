// Mock database
interface Capture {
  id: string;
  userId: string;
  code: string;
  source: 'notification' | 'email' | 'clipboard';
  sourceDetail: string;
  capturedAt: Date;
  expiresAt?: Date;
  usedAt?: Date;
  site?: string;
  type: 'otp' | 'token' | 'link' | 'password';
}

const captures: Map<string, Capture> = new Map();

export const captureRepository = {
  async findByUserId(userId: string, limit = 50): Promise<Capture[]> {
    const userCaptures = Array.from(captures.values())
      .filter(c => c.userId === userId)
      .sort((a, b) => b.capturedAt.getTime() - a.capturedAt.getTime())
      .slice(0, limit);
    return userCaptures;
  },

  async findById(id: string, userId: string): Promise<Capture | null> {
    const capture = captures.get(id);
    if (!capture || capture.userId !== userId) return null;
    return capture;
  },

  async create(data: Omit<Capture, 'id' | 'capturedAt'>): Promise<Capture> {
    const capture: Capture = {
      ...data,
      id: crypto.randomUUID(),
      capturedAt: new Date(),
    };
    captures.set(capture.id, capture);
    return capture;
  },

  async delete(id: string, userId: string): Promise<boolean> {
    const capture = captures.get(id);
    if (!capture || capture.userId !== userId) return false;
    captures.delete(id);
    return true;
  },

  async countByUserId(userId: string): Promise<number> {
    return Array.from(captures.values()).filter(c => c.userId === userId).length;
  },

  async countTodayByUserId(userId: string): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Array.from(captures.values()).filter(c => 
      c.userId === userId && c.capturedAt >= today
    ).length;
  },
};
