import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet, SectionList, ActivityIndicator, ScrollView, Button } from 'react-native';
import useWorkoutStore from '../../../src/srores/workoutStore';
import useWorkoutSocket from '../../../src/hooks/useWorkoutSocket'
import WorkoutCard from '../../../src/components/workouts/workoutCard'

const RegularPlan = () => {

    const workouts = useWorkoutStore((state) => state.workouts);
    const isLoading = useWorkoutStore((state) => state.isLoading);
    const fetchWorkouts = useWorkoutStore((state) => state.fetchWorkouts);


    useWorkoutSocket(); // socket starts listening for new workouts

    useEffect(() => {
        fetchWorkouts(); // fetch all workouts on load

    }, []);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                // If data is available, display the workouts
                <ScrollView style={{ width: '100%' }}>
                    {workouts.map((workout: any) => (

                        <View key={workout.id} style={{ marginBottom: 10 }} >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>{workout.target_muscle_groups}</Text>
                            <WorkoutCard />
                        </View>


                    ))}
                </ScrollView>
            )}
        </View>
    )
}




export default RegularPlan