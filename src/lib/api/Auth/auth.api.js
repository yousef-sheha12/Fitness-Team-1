import client from "../client";

export const loginUser = async (payload) => {
  const { data } = await client.post("/login", payload);
  return data;
};

export const registerUser = async (payload) => {
  const { data } = await client.post("/register", payload);
  return data;
};

export const logout = async () => {
  await client.post("/logout");
};

export const verifyOtp = async (payload) => {
  await client.post("/verify-otp", null, { params: payload });
};

export const forgotPassword = async (payload) => {
  await client.post("/forgot-password", payload);
};

export const getProfile = async () => {
  const { data } = await client.get("/profile");
  return data;
};

export const resetPassword = async (payload) => {
  await client.post("/reset-password", null, { params: payload });
};

export const getGoogleRedirectUrl = async () => {
  const { data } = await client.get("/auth/google/redirect");
  return data;
};
