import client from "./client";

export const saveFitnessProfile = async (payload) => {
  await client.post("/profile/fitness-profile", payload);
};

export const updateProfile = async (payload) => {
  const { data } = await client.put("/profile", payload);
  return data;
};

export const uploadProfileImage = async (payload) => {
  const { data } = await client.post("/profile/upload-image", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getProfileSessions = async () => {
  const { data } = await client.get("/profile/sessions");
  return data.data || data;
};

export const getProfilePackages = async () => {
  const { data } = await client.get("/profile/packages");
  return data.data || data;
};


export const getUserPurchases = async () => {

  const endpoints = [
    "/my-packages",
    "/user-packages",
    "/profile/purchases",
    "/profile/bookings",
    "/purchases",
  ];

  for (const endpoint of endpoints) {
    try {
      const { data } = await client.get(endpoint);
      return data;
    } catch {
      continue;
    }
  }
  return [];
};

export const getProgressActivity = async () => {
  const { data } = await client.get("/profile/progress-activity");
  return data.data || data;
};

export const getWorkoutHistory = async () => {
  const { data } = await client.get("/profile/workout-history");
  return data.data || data;
};

export const deleteAccount = async () => {
  await client.delete("/delete-account");
};

export const updatePassword = async (payload) => {
  const { data } = await client.put("/profile/password", payload);
  return data;
};
