import React, { } from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const Loading = () => {
    return (
        <View style={styles.container}>
            <SkeletonContent containerStyle={styles.skeletonContent}
                highlightColor={'#e4eff7'}
                boneColor='#ccd6db'
                isLoading={true}>
                <View style={styles.item} />
                <View style={styles.item} />
                <View style={styles.item} />
            </SkeletonContent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FCFF',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    skeletonContent: {
        flex: 1
    },
    item: {
        height: 200,
        width: 380,
        marginVertical: 10
    },
});

export default Loading;