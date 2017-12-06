import React, { Component } from 'react';
import {
    Platform,
    View,
} from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    Button, 
    Text 
} from 'native-base';
import {
    Actions,
} from 'react-native-router-flux';
import MainStyles from '../styles/style.main'
import SelectionStyles from '../styles/style.selections'
import TimePicker from './time-picker-module'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class ActivitySelection extends Component<{}> {
    state = {
        isDateTimePickerVisible: false,
        mood: ""
      };

    _showDateTimePicker = (mood) => {
        console.log(mood);
        this.setState({ isDateTimePickerVisible: true,
        mood: mood });
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });



    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        
        this._hideDateTimePicker();
        //Actions.friendsMock();
        Actions.friendBubbles();

    }
    static navigationOptions = {
        title: 'Mood Selection',
    };
    render() {
        return (
            <View style={{flexDirection:'row'}}>
            <Container style={{alignItems: 'center'}}>
                <Header/>
                <Content style={MainStyles.contentPadding}>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#FE2E2E'}]}
                    onPress = {this._showDateTimePicker.bind(this,'hungry')}>
                        <Text> Hungry </Text>
                    </Button>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#FE642E'}]}
                    onPress = {this._showDateTimePicker.bind(this,'sporty')}>
                        <Text> Sporty </Text>
                    </Button>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#FFBF00'}]}
                    onPress = {this._showDateTimePicker.bind(this,'coffee')}>
                        <Text> Coffee </Text>
                    </Button>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#A5DF00'}]}
                    onPress = {this._showDateTimePicker.bind(this,'movie')}>
                        <Text> Movie </Text>
                    </Button>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#01A9DB'}]}
                    onPress = {this._showDateTimePicker.bind(this,'chilling')}>
                        <Text> Chilling </Text>
                    </Button>
                    <Button large style={[SelectionStyles.moodSelection, {backgroundColor:'#7401DF'}]}
                    onPress = {this._showDateTimePicker.bind(this,'bored')}>
                        <Text> I'm just Bored </Text>
                    </Button>
                    <DateTimePicker mode='time'
                    titleIOS = 'Until what time are you available?'
                      isVisible={this.state.isDateTimePickerVisible}
                      onConfirm={this._handleDatePicked}
                      onCancel={this._hideDateTimePicker}
                    
                    />
                </Content>
            </Container>
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
