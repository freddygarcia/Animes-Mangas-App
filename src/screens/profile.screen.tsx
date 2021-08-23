import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from '../components/ImageOverlay';

const ProfileScreen = () => {
    const styles = useStyleSheet(theme);
    const profileImage = require('./../assets/profile.jpg');
    const overlayImage = require('./../assets/overlay.jpg');

    return (
        <ScrollView style={styles.container}>
            <ImageOverlay
                style={styles.header}
                source={overlayImage}>
                <Avatar
                    style={styles.profileAvatar}
                    source={profileImage}
                />
            </ImageOverlay>
            <Text> About me </Text>
        </ScrollView>
    );
}


const theme = StyleService.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 24,
        alignItems: 'center',
    },
    profileAvatar: {
        width: 124,
        height: 124,
        marginVertical: 16,
    }
});


export default ProfileScreen;