import { useState, useEffect } from 'react';
import { api } from '@/services/api';

interface User {
  id: string;
  email: string;
  name: string;
  plan: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = api.getToken();
    if (token) {
      loadProfile();
    } else {
      setLoading(false);
    }
  }, []);

  async function loadProfile() {
    try {
      const response = await api.getProfile();
      setUser(response.user);
    } catch (error) {
      console.error('Failed to load profile:', error);
      api.logout();
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    const response = await api.login(email, password);
    setUser(response.user);
    return response;
  }

  async function register(email: string, password: string, name: string) {
    const response = await api.register(email, password, name);
    setUser(response.user);
    return response;
  }

  function logout() {
    api.logout();
    setUser(null);
  }

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
}
