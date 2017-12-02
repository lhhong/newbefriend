import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'

class Bubble extends Component {
  render() {
    return (
    	<Image style={SelectionStyles.this.props.mood}
    	source = {{uri:this.props.picture}}
      	/>
    );
  }
}