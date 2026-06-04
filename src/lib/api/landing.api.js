import client from "./client";

export const getLandingStats = async () => {
  const response = await client.get("/landing/stats");
  return response.data;
};

export const getLandingTrainers = async (id) => {
  const response = await client.get(`/landing/trainers/${id}`);
  return response.data.data;
};

export const getLandingPackages = async () => {
  const response = await client.get("/landing/packages");
  return response.data.data;
};

export const subscribeNewsletter = async (payload) => {
  const response = await client.post("/landing/newsletter", payload);
  return response.data;
};

export const getLandingReviews = async () => {
  const response = await client.get("/landing/reviews");
  return response.data.data;
};

export const submitLandingReview = async (payload) => {
  const response = await client.post("/landing/reviews", payload);
  return response.data;
};

export const submitContactMessage = async (payload) => {
  const response = await client.post("/landing/contact", payload);
  return response.data;
};
