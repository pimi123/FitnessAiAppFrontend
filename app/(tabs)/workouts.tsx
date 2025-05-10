import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from "@/constants/icons"
import { colors } from '@/constants/colors';
import RegularPlan from '@/components/workouts/RegularWorkoutPlan';

export default function Workouts() {
    const [tab, setTab] = useState(false)
    const changeTab = () => {

        setTab(!tab);

    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.workoutTabsContainer}>
                <TouchableOpacity style={styles.workoutTab} onPress={changeTab}>
                    <Image style={styles.workoutsTabsImg} source={
                        tab ? icons.regularPlansPasive : icons.regularPlansActive} />
                    <Text style={tab ? styles.workoutsTabTextActive : styles.workoutsTabTextPasive}>Regular Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workoutTab} onPress={changeTab}>
                    <Image style={styles.workoutsTabsImg} source={
                        tab ? icons.preMadePlansActive : icons.preMadePlansPasive} />
                    <Text style={tab ? styles.workoutsTabTextPasive : styles.workoutsTabTextActive}>Pre-Made Plan</Text>
                </TouchableOpacity>
            </View>
            {tab ? (<Text>pre made workouts components</Text>) : (<RegularPlan></RegularPlan>)}

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#051937',
        flex: 1,
        padding: 10,

    },
    workoutTabsContainer: {

        flexDirection: "row",
        justifyContent: "space-around",

    },
    workoutTab: {

        justifyContent: "center",
        alignItems: "center"

    },
    workoutsTabTextPasive: {
        color: colors.baseButton
    },
    workoutsTabTextActive: {
        color: colors.primaryText
    },
    workoutsTabsImg: {
        width: 20,
        height: 20
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
