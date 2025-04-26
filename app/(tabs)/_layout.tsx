import { Tabs } from "expo-router"
import { ImageBackground, Image, Text, View } from "react-native";

export default function layout() {
    return (

        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
            }}>
            <Tabs.Screen name="index"
                options={{
                    title: "Home",
                    headerShown: false
                }} />
            <Tabs.Screen name="fitness"
                options={{
                    title: "Fitness",
                    headerShown: false
                }} />

            <Tabs.Screen name="diet"
                options={{
                    title: "Diet",
                    headerShown: false
                }} />

            <Tabs.Screen name="progress"
                options={{
                    title: "Progress",
                    headerShown: false
                }} />
            <Tabs.Screen name="profile"
                options={{
                    title: "Profile",
                    headerShown: false
                }} />


        </Tabs>
    )
}