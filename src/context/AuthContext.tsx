import type { AuthUser } from "@/lib/api/Auth/auth.api";
import { createContext } from "react";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
