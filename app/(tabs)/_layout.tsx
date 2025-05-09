// app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import { colors } from "../../src/constants/colors";
import { icons } from "../../src/constants/icons"; // Fixed import path
import { ImageBackground, Image, StyleSheet } from "react-native";
import { TabIconProps } from "../../src/constants/interfaces";

const TabIcon: React.FC<TabIconProps> = ({ focused, icon }) => {
    if (focused) {
        return (
            <ImageBackground style={styles.bdImage}>
                <Image source={icon} />
            </ImageBackground>
        );
    } else {
        return <Image source={icon} />;
    }
};

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 50, // set a fixed height
                    paddingTop: 0,
                    paddingBottom: 0, // already set
                    backgroundColor: colors.cardBackground,
                    borderRadius: 30, // Use number not string
                    marginBottom: 20,
                    marginHorizontal: 4,
                    position: "absolute",
                    borderColor: colors.cardBackground,
                },
                tabBarItemStyle: {
                    paddingBottom: 0,
                    paddingTop: 4,
                    justifyContent: "center",
                    alignItems: "center",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.homeIcon} />
                    ),
                }}
            />
            <Tabs.Screen
                name="fitness"
                options={{
                    title: "Fitness",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.navWorkoutIcon} />
                    ),
                }}
            />
            <Tabs.Screen
                name="diet"
                options={{
                    title: "Diet",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.navDieteIcon} />
                    ),
                }}
            />
            <Tabs.Screen
                name="progress"
                options={{
                    title: "Progress",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.navProgressIcon} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.navPersonIcon} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    bdImage: {
        backgroundColor: colors.screenBackground,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: colors.screenBackground,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        padding: 20, // Fixed: padding must be a number, not string
    },
});
