import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "@/lib/api/Auth/auth.api";
// import { getProfile } from "@/lib/api/Auth/auth.api";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (!storedToken) {
  //     setLoading(false);
  //     return;
  //   }
  //   getProfile()
  //     .then((response) => {
  //       setToken(storedToken);
  //       setUser(response.user);
  //     })
  //     .catch(() => {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("user");
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  const isLoggedIn = !!token;

  const login = (user: AuthUser, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  if (loading) return null; // or a spinner

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
