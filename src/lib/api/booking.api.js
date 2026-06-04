import client from "./client";

export const getBookings = async () => {
  const { data } = await client.get("/bookings");
  return data.data || data;
};

export const scheduleBooking = async (payload) => {
  const { data } = await client.post("/bookings/schedule", payload);
  return data;
};

export const payBooking = async (id, payload) => {
  const { data } = await client.post(`/bookings/${id}/pay`, payload);
  return data;
};

export const confirmBooking = async (id, payload) => {
  const { data } = await client.post(`/bookings/${id}/confirm`, payload);
  return data;
};

export const rescheduleBooking = async (id, payload) => {
  const { data } = await client.put(`/bookings/${id}/reschedule`, payload);
  return data;
};

export const cancelBooking = async (id) => {
  const { data } = await client.delete(`/bookings/${id}/cancel`);
  return data;
};
