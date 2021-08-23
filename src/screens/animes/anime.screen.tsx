import React, { useState } from 'react';
import { Button, Divider, Icon, Text, useStyleSheet } from "@ui-kitten/components";
import { GestureResponderEvent, Image, Linking, ScrollView, StyleSheet, View } from "react-native";
import { RouteProp } from '@react-navigation/native'
import Loading from '../../components/Loading';
import RateBar from '../../components/details/RateBar';
import CategoryList from '../../components/details/CategoryList';
import DetailsList from '../../components/details/DetailsList';
import { Anime } from '../../models/anime.model';
import { deleteAnime as unbookmarkAction, saveAnime as bookmarkAction } from '../../reducers/bookmark.reducer';
import BookmarkButton from '../../components/details/BookmarkButton';
import usetoggleBookmark from '../../hooks/toggle-bookmark.hook';


interface AnimeScreenProps {
    route: RouteProp<{ params: { item: Anime } }>;
}

const AnimeScreen = ({ route }: AnimeScreenProps) => {

    const [anime, setAnime] = useState(route.params.item);
    const styles = useStyleSheet(themedStyles);
    const bookmark = usetoggleBookmark({ bookmarkAction, unbookmarkAction });

    const openYoutubeLink = (anime: Anime) => (ev: GestureResponderEvent) => Linking.openURL(anime.trailer as string);

    const toggleBookmark = (anime: Anime) => {
        bookmark(anime);
        setAnime(anime => new Anime({ ...anime, isBookmarked: !anime.isBookmarked }))
    }

    if (anime === null) return <Loading />;

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
                    title: 'Year',
                    description: anime.year
                },
                {
                    title: 'Duration',
                    description: anime.episodeDuration
                },
                {
                    title: 'Episodes',
                    description: anime.numberOfEpisodes
                }]}
            />
            <Divider />
            <View style={styles.interationButtonsSection}>
                <Button
                    size='giant'
                    appearance={'ghost'}
                    style={styles.buttonTransparentBackground}
                    disabled={anime.trailer === null}
                    onPress={openYoutubeLink(anime)}
                    accessoryLeft={<Icon name='film-outline' />}
                    status='basic' />

                <BookmarkButton
                    status='basic'
                    onBookmarkSave={toggleBookmark}
                    item={anime}
                />
            </View>
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
        marginVertical: 20
    },
    detailsList: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    descriptionLabel: {
        margin: 16,
    },
    sinopsisSection: {
        marginHorizontal: 16,
    },
    interationButtonsSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    buttonTransparentBackground: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

export default AnimeScreen;