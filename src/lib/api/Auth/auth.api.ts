import client from "../client";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  profile_image: string | null;
  status: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  status: boolean;
  message: string;
  token: string;
  user: AuthUser;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
}

export const loginUser = async (
  payload: LoginPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/login", payload);
  return data;
};

export const registerUser = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/register", payload);
  return data;
};

export const logout = async (): Promise<void> => {
  await client.post("/logout");
};
