import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "@/lib/api/Auth/auth.api";
import { getProfile } from "@/lib/api/Auth/auth.api";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      setLoading(false);
      return;
    }
    getProfile()
      .then((response) => {
        const storedProfileComplete = localStorage.getItem(
          "is_profile_complete",
        );
        setToken(storedToken);
        setUser(response.user);
        setIsProfileComplete(storedProfileComplete === "1");
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("is_profile_complete");
        setLoading(false);
      });
  }, []);

  const isLoggedIn = !!token;

  const login = (user: AuthUser, token: string, isProfileComplete: boolean) => {
    setUser(user);
    setToken(token);
    setIsProfileComplete(isProfileComplete);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("is_profile_complete", isProfileComplete ? "1" : "0");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsProfileComplete(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("is_profile_complete");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, isProfileComplete, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
