import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/types/user";

interface AuthState {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    isTokenValid: () => boolean;
}

// Helper function to decode JWT and check expiration
const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationTime = payload.exp * 1000; // Convert to milliseconds
        return Date.now() >= expirationTime;
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // If we can't decode, consider it expired
    }
};

export const useAuth = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            login: (user, token) => set({ user, token }),
            logout: () => set({ user: null, token: null }),
            isTokenValid: () => {
                const { token } = get();
                if (!token) return false;

                if (isTokenExpired(token)) {
                    // Auto-logout if token is expired
                    set({ user: null, token: null });
                    return false;
                }

                return true;
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
