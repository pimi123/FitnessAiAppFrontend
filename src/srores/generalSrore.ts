import { create } from "zustand";

const useGeneralStore = create((set) => ({
  currentDate: new Date(),
  currentDay: new Date().toLocaleString('en-US', { weekday: 'long' }), // Get current day as string (e.g., "Monday")
}));

export default useGeneralStore;
