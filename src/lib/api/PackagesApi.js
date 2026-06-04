import client from "./client";

export const getPackages = async () => {
  const response = await client.get("/packages");
  return response.data.data;
};

export const getPackageTrainers = async (id) => {
  const { data } = await client.get(`/packages/${id}/trainers`);
  return data;
};
