
import { Link } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import subscribeToPusher from "../../utils/SocetsSetup";


export default function Fitness() {

    const [workouts, setWorkouts] = useState<string>("watinf for workouts")

    return (
        <View>
            <Text>testtt</Text>
        </View>
    );
}
