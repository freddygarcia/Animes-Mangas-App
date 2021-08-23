import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { StyleType, Text } from '@ui-kitten/components';

interface DetailsListProps {
    style?: StyleType
    data: DetailsListItem[]
}

interface DetailsListItem {
    title: string;
    description: string | number;
}

const DetailsList = (props: DetailsListProps): React.ReactElement<ViewProps> => {

    const { style, data, ...viewProps } = props;

    const renderItem = (item: DetailsListItem, index: number): React.ReactElement => (
        <View
            key={index}
            style={styles.item}>
            <Text
                appearance='hint'
                category='s2'>
                {item.title}
            </Text>
            <Text category='s1'>
                {item.description}
            </Text>
        </View>
    );

    return (
        <View
            {...viewProps}
            style={[styles.container, style]}>
            {data.map(renderItem)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 16,
    },
});

export default DetailsList;