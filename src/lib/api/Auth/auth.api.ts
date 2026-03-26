import client from "../client";

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    token: string;
  };
}

export interface LoginPayload {
  login: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  agree_terms: number;
}

export const loginUser = async (
  payload: LoginPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/api/auth/login", payload);
  return data;
};

export const registerUser = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/api/auth/register", payload);
  return data;
};

export const logout = async (): Promise<void> => {
  await client.post("/api/auth/logout");
};
