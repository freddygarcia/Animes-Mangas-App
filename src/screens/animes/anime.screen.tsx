import React from 'react';
import { Avatar, Button, Divider, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { ImageOverlay } from "../../components/ImageOverlay";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'
import { connect, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GetAnime } from '../../api/animes';
import { Anime } from '../../models/anime.model';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { saveAnime } from '../../reducers/anime.reducers';
import Loading from '../../components/Loading';

interface AnimeScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    route: RouteProp<{ params: { id: number } }>;
    anime: Anime | null;
}

const AnimeScreen = ({ navigation, route, anime }: AnimeScreenProps) => {

    const dispatch = useDispatch();
    const { data, loading } = useQuery(GetAnime, {
        variables: {
            id: route.params.id
        }
    });

    const storeAnime = () => !loading && data && dispatch(saveAnime(data.findAnimeById));

    useEffect(storeAnime, [loading]);

    if (loading || anime === null) return <Loading />

    return (
        <Layout>
            <ImageOverlay
                style={styles.headerContainer}
                source={{ uri: anime.posterImage.original.url }}>
                <Text
                    style={styles.headerTitle}
                    category='h1'
                    status='control'>
                    {anime.titles.canonical}
                </Text>
                <Text
                    style={styles.headerDescription}
                    category='s1'
                    status='control'>
                    {anime.description?.en}
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
                <Button
                    style={styles.iconButton}
                    appearance='ghost'
                    status='basic'>
                    data.comments.length
                </Button>
                <Button
                    style={styles.iconButton}
                    appearance='ghost'
                    status='danger'>
                    data.likes.length
                </Button>
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



const MapStateToProps = (state: RootState) => ({
    anime: state.animes.anime
});

export default connect(MapStateToProps)(AnimeScreen);