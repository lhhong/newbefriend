import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  BackHandler,
  Image,
  ImageBackground,
  TouchableOpacity,
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

export default class FriendsMock extends Component<{}> {
    static navigationOptions = {
        title: 'Friends/Deals',
    };
    render() {
      return(
        <View >
        <Image
          source = {require('../../Images/FriendsMock.png')}
          style={{flex:1}}
          resizeMode = 'contain'>
          <View style={{flexDirection: 'row'}}>
            <Container>
            <Header/>
              <Button>
                <Text> Friends </Text>
              </Button>
              <Button>
                <Text> Deals </Text>
              </Button>
            </Container>
          </View>
          </Image>
        </View>
        );
    }
}