import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import {
    Button,
    Container,
    Footer, 
}from 'native-base';
import { 
    Actions,
} from 'react-native-router-flux';
import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

export default class LoadingScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Loading Screen',
    };
    render() {
        return (
            <View style={MainStyles.container}>
            <Text style={{paddingBottom:30}}> </Text>
            <Image source = {require('../../Images/Logo.png')}
            style={SelectionStyles.logo}
            resizeMode="contain"
            />
            <Text style={MainStyles.header}> Welcome Socializer!</Text>
            <Text style={MainStyles.bodyText}> What are you up to?</Text>
            <Text style={MainStyles.bodyText}> Find friends to hang out with a tap of a button!</Text>
            <TouchableHighlight style={{flex:1}} onPress={Actions.friendBubbles}>
                <Image source = {require('../../Images/LogInG.png')}
                style={SelectionStyles.gButton}
                resizeMode="contain"
                />
            </TouchableHighlight>  
            <TouchableOpacity onPress={Actions.friendBubbles}>
            <Text style={MainStyles.subText}> Don't have an account? Sign up here! </Text>
            </TouchableOpacity>
            <Text style={{flex:1}}> </Text>
            </View>
        );
    }
}
{/*
            <Container>
                <Button block>
                    <Text> Hello </Text>
                </Button>
            </Container>

            <Button
            color='#FE9A2E'
            raised={true}
            overrides={true}
            backgroundColor='#FE9A2E'
            title="Go to Friend Bubbles"
            onPress={
                Actions.friendBubbles
            }/>
*/}


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
