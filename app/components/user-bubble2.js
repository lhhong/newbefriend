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
 	super(props)
 }
 render(){
 	return(
 		<TouchableOpacity>
 			<View>
 				<Image source = {{uri:'this.props.user_picture'}} />
 				<Text> this.props.
 		)
 }
}