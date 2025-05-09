import React, { useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet, SectionList, ActivityIndicator, ScrollView } from 'react-native';
import subscribeToPusher from '../../src/services/SocetsSetup';
import useWorkoutStore from '../../src/srores/workoutStore';
import useWorkoutSocket from '../../src/hooks/useWorkoutSocket'

export default function Fitness() {

    const workouts = useWorkoutStore((state) => state.workouts);
    const isLoading = useWorkoutStore((state) => state.isLoading);

    const fetchWorkouts = useWorkoutStore((state) => state.fetchWorkouts);

    useWorkoutSocket(); // socket starts listening for new workouts

    useEffect(() => {
        fetchWorkouts(); // fetch all workouts on load

    }, []);
    console.log(workouts.length, "frome heter ");


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Show loading indicator if data is loading */}
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                // If data is available, display the workouts
                <ScrollView style={{ width: '100%' }}>
                    {workouts.length > 0 ? (
                        workouts.map((workout: any, index: number) => (
                            <View key={index} style={{ padding: 10, marginBottom: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{workout.name}</Text>
                                <Text>{workout.description}</Text>
                                {/* Display any other workout details */}
                            </View>
                        ))
                    ) : (
                        <Text>No workouts available.</Text> // If no workouts found
                    )}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#051937',
        flex: 1,
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    weekTitle: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#0D2B57',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    cardLeft: {
        flex: 1,
        marginRight: 10,
    },
    dayText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    metaText: {
        color: '#ccc',
        fontSize: 12,
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#3CCF91',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#051937',
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});
