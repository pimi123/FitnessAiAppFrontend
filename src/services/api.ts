import axios from 'axios';

export const API_CONFIG = {
  BASE_URL: "http://192.168.1.7:8000/api",
  headers: {
    accept: "application/json",
  },
};

export const fetchUserWorkouts = async () => {
  try {
    const response = await axios.get(`${API_CONFIG.BASE_URL}/user-workouts`, {
      headers: {
        // You can include the Authorization header here if needed
        // Authorization: `Bearer ${token}`,
      },
    });

    // If successful, return the data
    return { data: response.data, error: false };
  } catch (error: any) {
    // In case of an error, return an error message
    console.error("Error fetching workouts:", error.message);
    return { data: null, error: error.message };
  }
};