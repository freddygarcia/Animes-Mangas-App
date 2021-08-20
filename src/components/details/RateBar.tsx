import React from 'react';
import { ImageStyle, StyleSheet, View, ViewProps } from 'react-native';
import { Button, ButtonElement, Icon, IconElement, Text } from '@ui-kitten/components';

export interface RateBarProps extends ViewProps {
    label?: string;
    value: number;
}

export const StarIcon = (style: ImageStyle): IconElement => (
    <Icon {...style} name='star' />
);

export const RateBar = (props: RateBarProps): React.ReactElement<ViewProps> => {

    const { label, ...restProps } = props;

    const renderRateButtonElement = (value: number): ButtonElement => {
        const status: string = value <= props.value ? 'warning' : 'basic';

        return (
            <Button
                key={value}
                style={styles.iconButton}
                appearance='ghost'
                size='tiny'
                status={status}
                accessoryLeft={StarIcon}
            />
        );
    };


    return (
        <View
            {...restProps}
            style={[styles.container, restProps.style]}>
            <Text
                style={styles.hint}
                appearance='hint'
                status='control'>
                {label}
            </Text>
            {[1, 2, 3, 4, 5].map(renderRateButtonElement)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hint: {
        marginRight: 8,
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});
