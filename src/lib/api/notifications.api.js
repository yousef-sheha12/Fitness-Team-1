import client from "./client";

export const getNotifications = async () => {
  const { data } = await client.get("/notifications");
  return data.data || data;
};

export const markNotificationRead = async (id) => {
  const { data } = await client.patch(`/notifications/${id}/mark-read`);
  return data;
};

export const markAllNotificationsRead = async () => {
  const { data } = await client.patch("/notifications/mark-all-read");
  return data;
};

export const deleteNotification = async (id) => {
  const { data } = await client.delete(`/notifications/${id}/delete`);
  return data;
};
