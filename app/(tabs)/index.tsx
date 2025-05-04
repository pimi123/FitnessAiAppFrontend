import { Text, View, Button, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from 'react';
import { icons } from "../../constants/icons"
import { colors } from "../../constants/colors"
import { TabIconProps } from "../../constants/interfaces"
import FlameStreaksIcon from "../../assets/images/adaptive-icon.png"




type MessageData = {
    message: string;
};
export default function Index() {

    const [message, setMessage] = useState<string>('Waiting for message...');
    return (
        <View style={styles.container}>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.screenBackground,
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 16,
        color: 'blue',
    },
});
