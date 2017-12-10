import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  BackHandler,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
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

export default class FriendsMock extends Component<{}> {
    static navigationOptions = {
        title: 'Friends/Deals',
    };
    render() {
      return(
          <ImageBackground
            source = {require('../../Images/FriendsMock.png')}
            style={MainStyles.backgroundImage}>
            <Container>
            <Header/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={[SelectionStyles.buttonHeader, {backgroundColor:'#DF7401'}]}>
              <Text style={{color: '#FFFFFF'}}> Friends </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[SelectionStyles.buttonHeader, {backgroundColor:'#DF7401'}]}
            onPress = {Actions.mapMock}>
              <Text style={{color: '#FFFFFF'}}> Deals </Text>
            </TouchableOpacity>
            </View>
            </Container>
          </ImageBackground>
        // <Container>
        // <Header/>
        // <View style={{flexDirection:'row'}}>
        //   <Button style={{padding: 10, backgroundColor:'#B45F04'}}> 
        //     <Text> Hello </Text> 
        //   </Button>
        //   <Button> 
        //     <Text> Hello </Text> 
        //   </Button>
        //   <Button> 
        //     <Text> Hello </Text> 
        //   </Button>
        // </View>
        // <Image
        //   source = {require('../../Images/FriendsMock.png')}
        //   style={MainStyles.backgroundImage}/>
        // </Container>
        );
    }
}