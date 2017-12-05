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

export default class userBubble extends Component {
	constructor (props) {
    	super(props)
  	}
	componentDidMount() {
  }
  render() {
  	console.log(this.props);
  	const {user_picture, user_mood} = this.props.entry
  	console.log(user_prof_pic);
  	return (
  			<TouchableHighlight onPress={Actions.mapView}>
	    	<Card style={{flex:0}}>
	    		<CardItem header>
	    			<Right>
	    				<Thumbnail source = {{uri:this.props.user_picture}}/>
	    				<Text>{user_name}</Text>
	    				<Text>{user_mood}</Text>
	    			</Right>
	    		</CardItem>
	    	</Card>
	    	</TouchableHighlight>
    );
  }
}