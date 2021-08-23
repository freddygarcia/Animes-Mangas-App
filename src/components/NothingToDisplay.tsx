import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from "react-native"

const NothingToDisplay = () => {
    const animator = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                animator,
                {
                    toValue: 300,
                    duration: 10000,
                    useNativeDriver: true
                }
            )
        ).start();
    }, []);


    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.message} >It looks there is no so much to show right now</Text>
            </View>

            <Animated.Image
                style={{
                    opacity: 0.4,
                    transform: [
                        { translateX: animator }
                    ]
                }}
                source={require('./../assets/tumbleweed.gif')} />

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FCFF',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    message: {
        color: '#556'
    }
})

export default NothingToDisplay;