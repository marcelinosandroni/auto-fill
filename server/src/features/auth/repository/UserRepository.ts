// Mock database - In production, use PostgreSQL
interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

const users: Map<string, User> = new Map();

export const userRepository = {
  async findByEmail(email: string): Promise<User | null> {
    for (const user of users.values()) {
      if (user.email === email) return user;
    }
    return null;
  },

  async findById(id: string): Promise<User | null> {
    return users.get(id) || null;
  },

  async create(email: string, passwordHash: string, name: string): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      email,
      passwordHash,
      name,
      plan: 'free',
      createdAt: new Date(),
    };
    users.set(user.id, user);
    return user;
  },

  async updatePlan(userId: string, plan: 'free' | 'pro' | 'enterprise'): Promise<void> {
    const user = users.get(userId);
    if (user) {
      user.plan = plan;
    }
  },
};
