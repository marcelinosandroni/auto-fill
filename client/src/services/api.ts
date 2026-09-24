const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

class ApiClient {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Request failed');
    }

    return data;
  }

  // Auth
  async register(email: string, password: string, name: string) {
    const response = await this.request<{
      user: { id: string; email: string; name: string; plan: string };
      accessToken: string;
      refreshToken: string;
    }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });

    this.setToken(response.accessToken);
    return response;
  }

  async login(email: string, password: string) {
    const response = await this.request<{
      user: { id: string; email: string; name: string; plan: string };
      accessToken: string;
      refreshToken: string;
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    this.setToken(response.accessToken);
    return response;
  }

  logout() {
    this.clearToken();
  }

  // Captures
  async getCaptures(limit = 50) {
    return this.request<{ captures: any[] }>(`/captures?limit=${limit}`);
  }

  async createCapture(
    code: string,
    source: 'notification' | 'email' | 'clipboard',
    sourceDetail: string,
    type: 'otp' | 'token' | 'link' | 'password' = 'otp'
  ) {
    return this.request<{ capture: any }>('/captures', {
      method: 'POST',
      body: JSON.stringify({ code, source, sourceDetail, type }),
    });
  }

  async deleteCapture(id: string) {
    return this.request<{ success: boolean }>(`/captures/${id}`, {
      method: 'DELETE',
    });
  }

  // User
  async getProfile() {
    return this.request<{
      user: {
        id: string;
        email: string;
        name: string;
        plan: string;
        createdAt: string;
      };
    }>('/user/profile');
  }

  async getPlan() {
    return this.request<{
      currentPlan: string;
      details: {
        name: string;
        autoFillsPerDay: number | string;
        devices: number | string;
        sources: number | string;
        history: string;
        price: number | string;
      };
    }>('/user/plan');
  }

  async upgradePlan(plan: 'free' | 'pro' | 'enterprise') {
    return this.request<{ success: boolean; message: string; newPlan: string }>(
      '/user/plan/upgrade',
      {
        method: 'POST',
        body: JSON.stringify({ plan }),
      }
    );
  }
}

export const api = new ApiClient();
