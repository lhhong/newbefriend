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
import UserBubble from './user-bubble2'

export default class FriendBubbles extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {data: []}

this.user = [{
  name: "a name1",
  picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/c99.74.466.466/s200x200/73093_1326415499175_214323_n.jpg?oh=20c8f574b1e9acfae45bdee7d7503bcc&oe=5AD5386D",
}, {
  name: "a name2",
  picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/c99.74.466.466/s200x200/73093_1326415499175_214323_n.jpg?oh=20c8f574b1e9acfae45bdee7d7503bcc&oe=5AD5386D",
}]
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
   // console.log(this.props)
    // var lists = this.user.map(function(u) 
    //   {return(<li key=u.name>

        
    //   </li>)};
    return (
      <View style={{flexDirection:'row', justifyContent: 'center'}}>
        <UserBubble data = {this.user} />
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
