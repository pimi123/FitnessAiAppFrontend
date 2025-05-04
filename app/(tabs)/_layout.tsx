import { Tabs } from "expo-router"
import { colors } from "../../constants/colors"
import { icons } from "constants/icons";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";
import { TabIconProps } from "../../constants/interfaces"

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, title }) => {
    if (focused) {
        return (
            <ImageBackground style={styles.bdImage}>
                <Image source={icon}></Image>
            </ImageBackground>
        );
    }
    else {
        return (
            <Image source={icon}></Image>
        )
    }

};


export default function layout() {
    return (

        <Tabs
            screenOptions={{
                tabBarShowLabel: false,

                tabBarStyle: {
                    backgroundColor: colors.cardBackground,
                    borderRadius: "30px",
                    marginBottom: 8,
                    marginLeft: 4,
                    marginRight: 4,
                    position: 'absolute',
                    borderColor: colors.cardBackground,

                },
                tabBarItemStyle: {
                    paddingTop: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}>
            <Tabs.Screen name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon focused={focused} icon={icons.homeIcon} title="Home" />
                        );
                    },
                }} />
            <Tabs.Screen name="fitness"
                options={{
                    title: "Fitness",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon focused={focused} icon={icons.navWorkoutIcon} title="Workout" />
                        );
                    },
                }} />

            <Tabs.Screen name="diet"
                options={{
                    title: "Diet",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon focused={focused} icon={icons.navDieteIcon} title="Workout" />
                        );
                    },
                }} />

            <Tabs.Screen name="progress"
                options={{
                    title: "Progress",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon focused={focused} icon={icons.navProgressIcon} title="Workout" />
                        );
                    },
                }} />
            <Tabs.Screen name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon focused={focused} icon={icons.navPersonIcon} title="Workout" />
                        );
                    },
                }} />


        </Tabs>
    )
}
const styles = StyleSheet.create({

    bdImage: {
        display: 'flex',
        backgroundColor: colors.screenBackground,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: colors.screenBackground, // You can change this to any color
        borderRadius: 999, // Full rounded
        justifyContent: 'center',
        alignItems: 'center',
        padding: "20px",

    }

});