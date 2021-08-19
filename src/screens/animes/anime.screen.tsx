import React from 'react';
import { Button, Divider, Icon, Text, useStyleSheet } from "@ui-kitten/components";
import { Image, ScrollView, StyleSheet, View } from "react-native";
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
import { RateBar } from '../../components/details/RateBar';
import { CategoryList } from '../../components/details/CategoryList';
import InfoBox from '../../components/details/InfoBox';
import { DetailsList } from '../../components/details/DetailsList';




interface SecondaryViewProps {
    anime: Anime;
}

const SecondaryView = ({ anime }: SecondaryViewProps) => (
    <ImageOverlay
        style={styles.container}
        source={{ uri: anime.posterImage.original.url }}>
        <View style={styles.profileDetailsContainer}>
            <Text
                style={styles.profileName}
                category='h1'
                status='control'>
                {anime.titles.canonical}
            </Text>
            <Text
                style={styles.profileLocation}
                category='h6'
                status='control'>
                {anime.categories.nodes.map(category => category.title.en).join(', ')}
            </Text>
            <RateBar
                label='Rating'
                value={parseInt((anime.averageRating / 10).toFixed())}
            />
            <View style={styles.profileParametersContainer}>
                <InfoBox
                    hint='Duration'
                    value={anime.episodeCount}
                />
                <InfoBox
                    hint='Eps Duratin'
                    value={anime.episodeCount}
                />
                <Button
                    appearance='ghost'
                    size='giant'
                    accessoryLeft={<Icon name='heart-outline' />}
                    status='control' />
            </View>
        </View>
    </ImageOverlay>
)


interface AnimeScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    route: RouteProp<{ params: { id: number } }>;
    anime: Anime | null;
}

const AnimeScreen = ({ navigation, route, anime }: AnimeScreenProps) => {

    const styles = useStyleSheet(themedStyles);
    const dispatch = useDispatch();
    const { data, loading } = useQuery(GetAnime, {
        variables: {
            id: route.params.id
        }
    });

    const storeAnime = () => !loading && data?.findAnimeById && dispatch(saveAnime(data.findAnimeById));

    useEffect(storeAnime, [loading]);

    if (loading || anime === null || data?.findAnimeById === null) return <Loading />;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Image
                style={styles.primaryImage}
                source={{ uri: anime.poster }}
            />
            <Text
                style={styles.titleLabel}
                category='h6'>
                {anime.title}
            </Text>
            <CategoryList
                style={styles.categoryList}
                data={anime.categoryList}
            />
            {
                anime.averageRating &&
                <RateBar
                    style={styles.rateBar}
                    value={anime.rating}
                />
            }
            <DetailsList
                style={styles.detailsList}
                data={[{
                    title: 'Episodes',
                    description: anime.episodeCount
                },
                {
                    title: 'Duration',
                    description: anime.episodeDuration
                },
                {
                    title: 'Year',
                    description: anime.year
                }
                ]}
            />
            <Divider />
            {Boolean(anime.description?.en) &&
                <>
                    <Text
                        style={styles.sinopsisSection}
                        category='s1'>
                        Sinopsis
                    </Text>
                    <Text
                        style={styles.descriptionLabel}
                        appearance='hint'>
                        {anime.description?.en}
                    </Text>
                </>
            }
        </ScrollView>
    )
}


const themedStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 20,
    },
    primaryImage: {
        alignSelf: 'center',
        width: '70%',
        height: 360,
        borderRadius: 8,
    },
    titleLabel: {
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 64,
        marginTop: 24,
    },
    categoryList: {
        alignSelf: 'center',
        marginVertical: 8,
    },
    rateBar: {
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    detailsList: {
        alignSelf: 'center',
        marginVertical: 24,
    },
    descriptionLabel: {
        margin: 16,
    },
    sinopsisSection: {
        marginHorizontal: 16,
    },
});



const MapStateToProps = (state: RootState) => ({
    anime: state.animes.anime
});

export default connect(MapStateToProps)(AnimeScreen);