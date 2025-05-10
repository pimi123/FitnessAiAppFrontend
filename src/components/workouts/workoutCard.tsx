import React from 'react';
import { Stack, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import useGeneralStore from "@/srores/generalSrore"

const WorkoutCard = () => {

    const router = useRouter();
    return (
        <View style={styles.card}>
            <View style={styles.topSection}>
                <View style={styles.textContainer}>
                    <Text style={styles.date}>May 01, Thu</Text>
                    <Text style={styles.title}>Day 1 \\ Leg Day</Text>
                    <Text style={styles.subText}>40 min | 100 kcal</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://img.freepik.com/free-photo/man-doing-lunges-smith-machine_7502-7926.jpg' }}
                />
            </View>
            {false && (<TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start exercise</Text>
            </TouchableOpacity>)}

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1E3A5F',
        borderRadius: 16,
        padding: 16,
        margin: 16,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    date: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 4,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        color: '#ccc',
        marginTop: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#00B2A9',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WorkoutCard;
