import client from "../client";


export const getTerainers = async () => {
  const response = await client.get("/trainers");
  return response.data.data;
};


export const getSearchResults = async (params) => {
  const response = await client.get("/search", {
    params: { search_value: params },
  });

  const data = response.data.data;

  if (!data || data.length === 0) return [];

  return data.map((user) => ({
    id: user.trainer_id,
    name: user.name,
    profile_image: user.profile_image,
    rating: user.rating,
    location: user.location,
    specializations: user.specializations ?? [],
    experience_years: user.experience_years,
  }));
};


export const getFilterResults = async (durationId, specializationId) => {
  const response = await client.get("/search/searchFilter", {
    data: {
      durationId,
      specializationId,
    },
  });
  const data = response.data.data;

  if (!data || data.length === 0) return [];

  return data.map((user) => ({
    id: user.trainer_id,
    name: user.name,
    profile_image: user.profile_image,
    rating: user.rating,
    location: user.location,
    specializations: user.specializations ?? [],
    experience_years: user.experience_years,
  }));
};


export const getFilterValues = async () => {
  const response = await client.get("/specializations");

  return response.data.data;
};



export const getTrainerById = async (id) => {
  const response = await client.get(`/trainers/${id}`);
  return response.data.data || response.data;
};

export const getTrainerSchedule = async (id) => {
  const response = await client.get(`/trainers/${id}/schedule`);
  return response.data.data || response.data;
};

export const getTrainerAvailability = async (id) => {
  const response = await client.get(`/trainers/${id}/availability`);
  return response.data.data || response.data;
};


export const getTrainerDashboardSessions = async () => {
  const response = await client.get("/trainer/sessions");
  return response.data.data || response.data;
};

export const getTrainerDashboardBookings = async () => {
  const response = await client.get("/trainer/bookings");
  return response.data.data || response.data;
};

export const getTrainerDashboardPackages = async () => {
  const response = await client.get("/trainer/packages");
  return response.data.data || response.data;
};

export const createTrainerPackage = async (payload) => {
  const response = await client.post("/trainer/packages", payload);
  return response.data;
};

export const updateTrainerPackage = async (id, payload) => {
  const response = await client.put(`/trainer/packages/${id}`, payload);
  return response.data;
};

export const deleteTrainerPackage = async (id) => {
  const response = await client.delete(`/trainer/packages/${id}`);
  return response.data;
};
