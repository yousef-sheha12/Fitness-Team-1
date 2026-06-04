import { create } from "zustand";
import { getProfile } from "@/lib/api/Auth/auth.api";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  isProfileComplete: localStorage.getItem("is_profile_complete") === "1",
  loading: true,
  isLoggedIn: !!localStorage.getItem("token"),

  initialize: async () => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      set({ loading: false, isLoggedIn: false });
      return;
    }

    try {
      const response = await getProfile();
      const storedProfileComplete = localStorage.getItem("is_profile_complete");
      set({
        token: storedToken,
        user: response.user,
        isProfileComplete: storedProfileComplete === "1",
        isLoggedIn: true,
        loading: false,
      });
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("is_profile_complete");
      set({
        token: null,
        user: null,
        isProfileComplete: false,
        isLoggedIn: false,
        loading: false,
      });
    }
  },

  login: (user, token, isProfileComplete) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("is_profile_complete", isProfileComplete ? "1" : "0");
    set({
      user,
      token,
      isProfileComplete,
      isLoggedIn: true,
    });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("is_profile_complete");
    set({
      user: null,
      token: null,
      isProfileComplete: false,
      isLoggedIn: false,
    });
  },
}));
