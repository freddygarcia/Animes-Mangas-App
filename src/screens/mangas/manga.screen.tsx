import React from 'react';
import { Button, Divider, Icon, Text, useStyleSheet } from "@ui-kitten/components";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { RouteProp } from '@react-navigation/native'
import { connect } from 'react-redux';
import { Manga } from '../../models/manga.model';
import { RootState } from '../../app/store';
import Loading from '../../components/Loading';
import RateBar from '../../components/details/RateBar';
import CategoryList from '../../components/details/CategoryList';
import DetailsList from '../../components/details/DetailsList';
import { useItemHandler } from '../../hooks/item.hook';


interface MangaScreenProps {
    route: RouteProp<{ params: { item: Manga } }>;
}

const MangaScreen = ({ route }: MangaScreenProps) => {
    
    const manga: Manga = route.params.item;
    const styles = useStyleSheet(themedStyles);

    console.log(manga);
    
    if (manga === null) return <Loading />;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Image
                style={styles.primaryImage}
                source={{ uri: manga.poster }}
            />
            <Text
                style={styles.titleLabel}
                category='h6'>
                {manga.title}
            </Text>
            <CategoryList
                style={styles.categoryList}
                data={manga.categoryList}
            />
            {
                manga.averageRating &&
                <RateBar
                    style={styles.rateBar}
                    value={manga.rating}
                />
            }
            <DetailsList
                style={styles.detailsList}
                data={[{
                    title: 'Year',
                    description: manga.year
                },
                {
                    title: 'Duration',
                    description: manga.episodeDuration
                },
                {
                    title: 'Episodes',
                    description: manga.numberOfEpisodes
                }]}
            />
            <Divider />
            <View style={styles.interationButtonsSection}>
                <Button
                    size='giant'
                    appearance={'ghost'}
                    style={styles.buttonTransparentBackground}
                    disabled={manga.trailer === null}
                    // onPress={openYoutubeLink(manga)}
                    accessoryLeft={<Icon name='film-outline' />}
                    status='basic' />
                <Button
                    size='giant'
                    appearance={'ghost'}
                    accessoryLeft={<Icon name='heart-outline' />}
                    status='basic' />
            </View>
            {Boolean(manga.description?.en) &&
                <>
                    <Text
                        style={styles.sinopsisSection}
                        category='s1'>
                        Sinopsis
                    </Text>
                    <Text
                        style={styles.descriptionLabel}
                        appearance='hint'>
                        {manga.description?.en}
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



const MapStateToProps = (state: RootState) => ({
    manga: state
});

export default connect(MapStateToProps)(MangaScreen);