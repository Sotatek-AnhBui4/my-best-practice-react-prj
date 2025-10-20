import { create } from 'zustand';
import type { UserProfile } from '@/types/user';

interface UserState {
  profile: UserProfile | null;
  users: UserProfile[];
  isLoading: boolean;
  error: string | null;
  setProfile: (profile: UserProfile) => void;
  setUsers: (users: UserProfile[]) => void;
  addUser: (user: UserProfile) => void;
  updateUser: (id: string, data: Partial<UserProfile>) => void;
  deleteUser: (id: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  users: [],
  isLoading: false,
  error: null,

  setProfile: (profile) => set({ profile }),

  setUsers: (users) => set({ users }),

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  updateUser: (id, data) =>
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? { ...user, ...data } : user)),
      profile: state.profile?.id === id ? { ...state.profile, ...data } : state.profile,
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  clearError: () => set({ error: null }),
}));
