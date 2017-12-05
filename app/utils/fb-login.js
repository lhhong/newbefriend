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
import { LoginButton, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk'
import MyReq from './request-manager';

function serverLogin(result){
    AccessToken.getCurrentAccessToken().then(
        (data) => {
            let accessToken = data.accessToken;
            const responseFriendsCallback = (error, result) => {
                if (error) {
                    console.log(error)
                    alert('Error fetching data: ' + error.toString());
                } else {
                    console.log(result)
                    alert('Success fetching data: ' + result.toString());
                }
            }
            const friendsRequest = new GraphRequest(
                '/me/friends',
                {
                    accessToken: accessToken,
                },
                responseFriendsCallback,
            );
            const responseInfoCallback = (error, result) => {
                if (error) {
                    console.log(error)
                    alert('Error fetching data: ' + error.toString());
                } else {
                    console.log(result)
                    alert('Success fetching data: ' + result.toString());
                    MyReq.logIn(result)
                    new GraphRequestManager().addRequest(friendsRequest).start();
                }
            }
            const infoRequest = new GraphRequest(
                '/me',
                {
                    accessToken: accessToken,
                    parameters: {
                        fields: {
                            string: 'id,name,picture'
                        }
                    }
                },
                responseInfoCallback,
            );
            new GraphRequestManager().addRequest(infoRequest).start();
        })
    alert("Login was successful with permissions: " + result.grantedPermissions)
}

export default class Login extends Component<{
    style?: any
}> {
    render() {
        return (
            <View>
            <LoginButton
                style={this.props.style}
                readPermissions={["public_profile", "user_friends", "email"]}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            alert("Login failed with error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("Login was cancelled");
                        } else {
                            console.log(result)
                            serverLogin(result)
                        }
                    }
                }
                onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    }
};


