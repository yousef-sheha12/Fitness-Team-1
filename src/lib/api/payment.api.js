import client from "./client";

export const getPaymentsHistory = async () => {
  const { data } = await client.get("/payments-history");
  return data.data || data;
};

export const getCards = async () => {
  const { data } = await client.get("/cards");
  return data.data || data;
};

export const addCard = async (payload) => {
  const { data } = await client.post("/cards", payload);
  return data;
};

export const deleteCard = async (id) => {
  const { data } = await client.delete(`/cards/${id}`);
  return data;
};
