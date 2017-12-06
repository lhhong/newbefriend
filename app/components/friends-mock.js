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
   Title,
   Button,
   Left,
   Right,
   Body,
   Icon,
} from 'native-base';
import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

export default class FriendsMock extends Component<{}> {
    static navigationOptions = {
        title: 'Friends/Deals',
    };
    render() {
      return(
        <Container>
        <Header/>
        <View style={{flexDirection:'row'}}>
          <Button style={{padding: 10, backgroundColor:'#B45F04'}}> 
            <Text> Hello </Text> 
          </Button>
          <Button> 
            <Text> Hello </Text> 
          </Button>
          <Button> 
            <Text> Hello </Text> 
          </Button>
        </View>
        <Image
          source = {require('../../Images/FriendsMock.png')}
          style={MainStyles.backgroundImage}/>
        </Container>
            // <Container>
            // <Header/>
            //   <Button>
            //     <Text> Friends </Text>
            //   </Button>
            //   <Button>
            //     <Text> Deals </Text>
            //   </Button>
            // </Container>
        );
    }
}