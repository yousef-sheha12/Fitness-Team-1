import client from "./client";

export const getConversations = async () => {
  const { data } = await client.get("/conversations");
  return data.data || data;
};

export const createConversation = async (payload) => {
  const { data } = await client.post("/conversations", payload);
  return data;
};

export const getMessages = async (conversationId) => {
  const { data } = await client.get(`/conversations/${conversationId}/messages`);
  return data.data || data;
};

export const sendMessage = async (conversationId, payload) => {
  const { data } = await client.post(`/conversations/${conversationId}/messages`, payload);
  return data;
};

export const markConversationRead = async (conversationId) => {
  const { data } = await client.patch(`/conversations/${conversationId}/read`);
  return data;
};
