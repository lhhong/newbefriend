import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  BackHandler,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {
   Card,
   CardItem,
   Text,
   View,
   Thumbnail,
   Container,
   Header,
   Content,
   Title,
   Button,
   Left,
   Right,
   Body,
   Icon,
} from 'native-base';
import { 
    Actions,
} from 'react-native-router-flux';
import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

export default class MapMock extends Component<{}> {
    _showAlert = () => {
      Alert.alert('Deal 1', 'Invite 5 friends');
    };
    static navigationOptions = {
        title: 'Friends/Deals',
    };



    render() {
      return(
          <ImageBackground
            source = {require('../../Images/MapMock.png')}
            style={MainStyles.backgroundImage}>
            <Header/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={[SelectionStyles.buttonHeader, {backgroundColor:'#DF7401'}]}
            onPress={Actions.friendsMock}>
              <Text style={{color: '#FFFFFF'}}> Friends </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[SelectionStyles.buttonHeader, {backgroundColor:'#DF7401'}]}>
              <Text style={{color: '#FFFFFF'}}> Deals </Text>
            </TouchableOpacity>
            </View>
            <View style = {{flexDirection:'row'}}>
              <TouchableOpacity style={[SelectionStyles.buttonFooter, {borderWidth: 2, borderColor:'#FFBF00'}]}>
                <Image
                  style ={{flex: 1}}
                  resizeMode = 'contain'
                  source={require('../../Images/ihousecafe.jpg')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={[SelectionStyles.buttonFooter, {borderWidth: 2, borderColor:'#FFBF00'}]}>
                <Image
                  style ={{flex: 1}}
                  resizeMode = 'contain'
                  source={require('../../Images/hummingbird.jpg')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={[SelectionStyles.buttonFooter, {borderWidth: 2, borderColor:'#FFBF00'}]}
              onPress = {this._showAlert}>
                <Image
                  style ={{flex: 1}}
                  resizeMode = 'contain'
                  source={require('../../Images/peets.jpg')}
                  />
              </TouchableOpacity>
            </View>
          </ImageBackground>

        );
    }
}