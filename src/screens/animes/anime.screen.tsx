import React from 'react';
import { Avatar, Button, Divider, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { ImageOverlay } from "../../components/ImageOverlay";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'

interface AnimeScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    route: RouteProp<{}>;
}

const AnimeScreen = ({ navigation, route }: AnimeScreenProps) => {

    return (
        <Layout>
            <ImageOverlay
                style={styles.headerContainer}
                source={{ uri: 'https://reactnavigation.org/assets/images/tabs-badges-94675c8566521656189422362d92cf9e.png' }}>
                <Text
                    style={styles.headerTitle}
                    category='h1'
                    status='control'>
                    data.title
                </Text>
                <Text
                    style={styles.headerDescription}
                    category='s1'
                    status='control'>
                    data.description
                </Text>
            </ImageOverlay>
            <Layout
                style={styles.contentContainer}
                level='1'>
                <Text>
                    data.content
                </Text>
            </Layout>
            <Divider />
            <View style={styles.activityContainer}>
                <Avatar source={{ uri: 'https://reactnavigation.org/assets/images/tabs-badges-94675c8566521656189422362d92cf9e.png' }} />
                <View style={styles.authoringInfoContainer}>
                    <Text>
                        data.author.fullName
                    </Text>
                    <Text
                        appearance='hint'
                        category='p2'>
                        data.date
                    </Text>
                </View>
                {/* <Button
                    style={styles.iconButton}
                    appearance='ghost'
                    status='basic'
                    accessoryLeft={MessageCircleIcon}>
                    ${data.comments.length}
                </Button>
                <Button
                    style={styles.iconButton}
                    appearance='ghost'
                    status='danger'
                    accessoryLeft={HeartIcon}>
                    ${data.likes.length}
                </Button> */}
            </View>
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'center',
        minHeight: 256,
        paddingVertical: 24,
    },
    headerTitle: {
        textAlign: 'center',
        marginVertical: 24,
        zIndex: 1,
    },
    headerDescription: {
        zIndex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 24,
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    authoringInfoContainer: {
        flex: 1,
        marginHorizontal: 16,
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});



export default AnimeScreen;