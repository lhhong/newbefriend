import React, { Component } from 'react';
import { AppRegistry,  
	Image,
	TouchableHighlight,
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

import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

class UserBubble2 extends Component{
constructor(props) {
 	super(props);
 	console.log(props)

 }
 render(){
 	return(
 		<Container style={{alignItems: 'center'}}>
 		<Header/>
 		<TouchableOpacity style={[SelectionStyles.profileButton, {backgroundColor:'#F5A9A9'}]}>
 			<View style={{flexDirection:'row'}}>
 				<Left>
 				<Image style = {SelectionStyles.profilepic} source = {{uri:this.props.data.picture}} />
 				</Left>
 				<Right>
 				<Text> {this.props.data.name} </Text>
 				<Text> Hungry </Text>
 				<Text> {this.props.data.availableFor} </Text>

 				</Right>
 			</View>
 		</TouchableOpacity>
 		</Container>
 		)
 }
}

export default UserBubble2