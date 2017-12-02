import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    AppRegistry,
    TextInput,
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
        title: 'Sign In',
    };
    render() {
        return (
            <View style={MainStyles.container}>
            <Text style={{paddingBottom:30}}> </Text>
            <Image source = {require('../../Images/Logo.png')}
            style={SelectionStyles.logo}
            resizeMode="contain"
            />
            <TouchableHighlight onPress={Actions.friendBubbles}>
                <Image source = {require('../../Images/LogInG.png')}
                style={SelectionStyles.gButton}
                resizeMode="contain"
                />
            </TouchableHighlight>      
            <Text style={{flex:2}}> </Text>
            </View>
        );
    }
}
/*
            <TouchableOpacity style={SelectionStyles.button}
            onPress={Actions.SignIn}>
            <Text style={{fontSize:20, color:'#FFFFFF'}}> Sign in </Text>
            </TouchableOpacity>
*/

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
