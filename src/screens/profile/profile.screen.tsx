import React from 'react';
import { ImageBackground, ListRenderItemInfo, ScrollView, StyleSheet, Touchable, TouchableHighlight, View } from 'react-native';
import { ImageOverlay } from '../../components/ImageOverlay';
import { Avatar, Button, List, Text } from '@ui-kitten/components';
import Me from '../../assets/me';
import { Linking } from 'react-native';


const ProfileScreen = () => {
    const profileImage = require('./../../assets/profile.jpg');
    const overlayImage = require('./../../assets/overlay.jpg');

    const openSite = () => Linking.openURL(Me.site);

    const Details = (props: any): React.ReactElement => {

        const { style, hint, value, ...viewProps } = props;

        return (
            <View
                {...viewProps}
                style={{ flex: 1, alignItems: 'center' }}>
                <Text

                    onPress={props.onPress}
                    category='s2'
                    status='control'>
                    {value}
                </Text>
                <Text
                    category='c2'
                    status='control'>
                    {props.hint}
                </Text>
            </View>
        )
    };

    const renderHobbieItem = (info: ListRenderItemInfo<{ icon: any, title: string }>): React.ReactElement => {
        return (
            <View>
                <TouchableHighlight onPress={openSite} style={styles.collegeTouch} underlayColor={'#eee'}>
                    <ImageBackground
                        style={styles.hobbieItem}
                        key={info.index}
                        source={info.item.icon}
                    />
                </TouchableHighlight>
                <Text style={{ textAlign: 'center', bottom: 0, transform: [{ rotateZ: '-5deg' }] }}>{info.item.title}</Text>
            </View>
        )
    };

    const renderStackItem = (info: ListRenderItemInfo<{ icon: any, exp: number, url: string }>): React.ReactElement => {
        return (
            <View style={styles.stackItem} key={info.index}>
                <TouchableHighlight onPress={() => Linking.openURL(info.item.url)} style={styles.stackTouch} underlayColor={'#eee'}>
                    <Avatar source={info.item.icon} style={{ width: 30, height: 30 }} />
                </TouchableHighlight>
                <Text
                    style={styles.stackName}
                    category='c2'>
                    +{info.item.exp} Yrs
                </Text>
            </View>
        )
    };

    const renderCollegeItem = (info: ListRenderItemInfo<{ icon: any, year: number, url: string }>): React.ReactElement => {
        return (
            <View key={info.index} style={{ alignItems: 'center' }}>
                <TouchableHighlight onPress={() => Linking.openURL(info.item.url)} style={styles.hobbieTouch} underlayColor={'#eee'}>
                    <ImageBackground
                        style={styles.collegeItem}
                        key={info.index}
                        source={info.item.icon}
                    />
                </TouchableHighlight>
                <Text
                    style={styles.stackName}
                    category='c2'>
                    {info.item.year}
                </Text>
            </View>)
    }



    return (
        <ScrollView style={styles.container}>
            <ImageOverlay
                style={styles.header}
                source={overlayImage}>
                <Avatar
                    style={styles.profileAvatar}
                    source={profileImage}
                />
                <Text
                    style={styles.profileName}
                    category='h5'
                    status='control'>
                    {Me.name}
                </Text>
                <View style={styles.occupationSection}>
                    <Text
                        style={styles.occupation}
                        status='control'>
                        {Me.ocuppation}
                    </Text>
                </View>
                <View style={styles.personalSection}>
                    <Details
                        style={styles.personalInfo}
                        hint='Age'
                        value={Me.age}
                    />
                    <Details
                        style={styles.personalInfo}
                        onPress={() => Linking.openURL('https://itla.edu.do/')}
                        hint='a balance'
                        value={'Life is'}
                    />
                    <Details
                        style={styles.personalInfo}
                        onPress={() => Linking.openURL('tg://resolve?domain=' + me.telegram)}
                        hint='Telegram'
                        value={Me.telegram}
                    />
                </View>
            </ImageOverlay>


            <Text
                style={styles.section}
                category='s1'>
                Experience
            </Text>
            <List
                contentContainerStyle={styles.stackList}
                style={styles.baseList}
                horizontal={true}
                data={Me.stack}
                renderItem={renderStackItem}
            />
            <Text
                style={styles.section}
                category='s1'>
                Colleges
            </Text>
            <List
                data={Me.studies}
                horizontal={true}
                style={styles.baseList}
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                renderItem={renderCollegeItem}
            />
            <Text
                style={styles.section}
                category='s1'>
                Hobbies
            </Text>
            <List
                data={Me.hobbies}
                style={[styles.baseList, { marginBottom : 30 }]}
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                numColumns={3}
                renderItem={renderHobbieItem}
            />
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 24,
        alignItems: 'center',
    },
    baseList: {
        backgroundColor: 'white'
    },
    profileAvatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        marginVertical: 16,
    },
    profileName: {
        zIndex: 1,
    },
    occupationSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    occupation: {
        marginVertical: 8,
    },
    personalSection: {
        flexDirection: 'row',
        width: '75%',
        marginVertical: 8,
    },
    personalInfo: {
        flex: 1,
    },
    section: {
        marginTop: 34,
        marginBottom: 20,
        marginHorizontal: 16,
    },
    stackList: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    stackItem: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    hobbieTouch: {
        borderRadius: 100
    },
    collegeItem: {
        width: 160,
        marginHorizontal: 10,
        height: 40
    },
    stackTouch: {
        borderRadius: 100,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    collegeTouch: {

    },
    stackName: {
        marginTop: 8,
    },
    hobbieItem: {
        flex: 1,
        aspectRatio: 1.0,
        marginLeft: 20,
        width: 90,
        height: 90
    },
});




export default ProfileScreen;