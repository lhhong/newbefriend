import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  BackHandler,
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
import UserBubble from './user-bubble'

export default class FriendBubbles extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }
  componentWillMount() {
  fetch('https://officehoursteam.herokuapp.com/posts.json', {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    },
  }).then(response => response.json())
 .then(response => this.setState({ data: response }))

  BackHandler.addEventListener("hardwareBackPress", () => {
   this.props.navigation.goBack();
   return true;
  }); 
}
  render() {
    console.log(this.props);
    return (
      <UserBubble
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! At Friend Bubble
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
