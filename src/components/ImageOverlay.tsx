import React from 'react';
import {
    ImageBackground,
    ImageBackgroundProps,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native';


export interface ImageOverlayProps extends ImageBackgroundProps {
    style: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export const ImageOverlay = (props: ImageOverlayProps) => {

    const { style, children, ...imageBackgroundProps } = props;
    const OPACITY_COLOR = 'rgba(0, 0, 0, 0.7)';

    return (
        <ImageBackground {...imageBackgroundProps} style={style}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: OPACITY_COLOR, }]} />
            {children}
        </ImageBackground>
    );
};