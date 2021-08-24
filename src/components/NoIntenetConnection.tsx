import React, {  } from 'react';
import { Image, StyleSheet, View } from "react-native"

const NoInternetConnection = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./../assets/no-internet.gif')} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E1E0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: '#556'
    }
})

export default NoInternetConnection;