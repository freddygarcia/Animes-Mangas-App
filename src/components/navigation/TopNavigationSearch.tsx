import React, { useEffect, useRef, useState } from 'react';
import { Icon, Input, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { Animated, StyleSheet } from "react-native";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { SearchState, enable, hide, update } from "../../reducers/search.reducer";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface TopNavigationSearchProps {
    title: string
    state: SearchState
    navigation: NativeStackNavigationProp<{}>;
};

const TopNavigationSearch = (props: TopNavigationSearchProps) => {

    const dispatch = useDispatch();
    const { criteria, searching } = props.state;
    const animator = useRef(new Animated.Value(0)).current;
    const [icon, setIcon] = useState(searching ? 'arrow-back-outline' : 'menu');

    const resetSearch = () => {
        setIcon('menu')
        dispatch(hide())
    };

    const AnimatedTopNavigationActionComponent = Animated.createAnimatedComponent(TopNavigationAction);


    const AnimatedTopNavigationAction = () => (
        <AnimatedTopNavigationActionComponent
            style={{
                transform: [{
                    rotate: animator.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg']
                    })
                }],
            }}
            icon={<Icon name={icon} />}
            onPress={triggerHideSearchAnimation}
        />
    )

    const renderSearchAction = (): React.ReactElement => {
        return (

            <TopNavigationAction
                icon={<Icon name='search' />}
                onPress={triggerEnableSearchAnimation}
            />
        )
    };

    const renderSearchingAction = <Input placeholder={'Search'} onChangeText={value => dispatch(update(value))} value={criteria} style={styles.searchInput} autoFocus={true} />

    const triggerEnableSearchAnimation = () => {

        dispatch(enable());

        Animated.timing(
            animator,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();

        setTimeout(() => setIcon('arrow-forward-outline'), 120);
    }

    const triggerHideSearchAnimation = () => {

        if (searching) {
            resetSearch()

            Animated.timing(
                animator,
                {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }
            ).start();
            setTimeout(() => setIcon('menu'), 100);
        } else {
            props.navigation.toggleDrawer()
        }
    }

    useEffect(() => props.navigation.addListener('blur', resetSearch), [props.navigation])

    const title = searching ? undefined : props.title;
    const rightAction = searching ? renderSearchingAction : renderSearchAction;

    return (
        <TopNavigation
            title={title}
            accessoryLeft={AnimatedTopNavigationAction}
            accessoryRight={rightAction}
        />
    )
};


const styles = StyleSheet.create({
    searchInput: {
        width: '89%',
        margin: 0,
        borderColor: '#ddd',
        marginRight: '10%',
    }
})


const MapStateToProps = (state: RootState) => ({
    state: state.search
});

export default connect(MapStateToProps)(TopNavigationSearch);