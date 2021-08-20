import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ListProps, StyleType } from '@ui-kitten/components';

interface CategoryListProps {
    style?: StyleType
    data: string[]
}

export const CategoryList = (props: CategoryListProps): React.ReactElement => {

    const { style, data, ...viewProps } = props;

    const renderItem = (item: any, index: number): React.ReactElement => (
        <Button
            key={index}
            style={styles.item}
            size='tiny'>
            {item}
        </Button>
    );

    return (
        <View
            {...viewProps}
            style={[styles.container, style]}>
            {data?.map(renderItem)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        borderRadius: 16,
        marginHorizontal: 4,
    },
});
