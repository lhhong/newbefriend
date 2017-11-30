import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Button
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

export default class ActivitySelection extends Component<{}> {
    static navigationOptions = {
        title: 'Activity Selection',
    };
    render() {
        return (
            <View style={MainStyles.container}>
            <Text>A text</Text>
            <Button
            title="Go to Friend Bubbles"
            onPress={
                Actions.friendBubbles
            }
            />
            </View>
        );
    }
}


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
