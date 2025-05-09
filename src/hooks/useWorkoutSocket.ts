import { useEffect } from 'react';
import subscribeToPusher from '../services/SocetsSetup'; // your socket logic
import useWorkoutStore from '../srores/workoutStore'; // Zustand or similar store



const useWorkoutSocket = () => {
    const addWorkout = useWorkoutStore((state) => state.addWorkout);

    useEffect(() => {
        subscribeToPusher(
            'generated-workout',
            'WorkoutCreated',
            (data) => {
                addWorkout(data.workouts);
            }
        );
    }, []);
};

export default useWorkoutSocket;
