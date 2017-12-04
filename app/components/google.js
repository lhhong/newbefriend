import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Google extends Component {
    static navigationOptions = {
        title: 'Google SignIn',
    };
    render() {
        return (
            <WebView
            source={{uri: 'http://136.152.209.86:8080/google-login'}}
            style={{marginTop: 20}}
            />
        );
    }
}
