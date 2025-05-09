import { create } from "zustand";
import { fetchUserWorkouts } from "../services/api";

const useWorkoutStore = create((set) => ({
  workouts: [],
  isLoading: false,
  error: false,

  setWorkouts: (data) => set({ workouts: data }),

  fetchWorkouts: async () => {
    console.log("test");

    set({ isLoading: true, error: null });
    try {
      const data = await fetchUserWorkouts();

      if (!data.error) {
        set({ workouts: data.data, isLoading: false });
      } else {
        set({ error: true });
      }

      console.log(data);
    } catch (err) {
      set({ isLoading: false, error: err.message });
    }
  },
  addWorkout: (workout) =>
    set((state) => ({
      workouts: [...state.workouts, workout],
    })),
}));

export default useWorkoutStore;
