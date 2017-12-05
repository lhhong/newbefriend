import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { 
    Container, 
    Header, 
    Content, 
    Button, 
    Text 
} from 'native-base';

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render () {
    return (
      <View>
        <Button large>
          <Text> Test 2 </Text>
        </Button>      
        <Button large>
          <Text> Test </Text>
        </Button>
        <Button onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </Button>
        <DateTimePicker mode='time'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={[this._handleDatePicked,Actions.friendBubbles]}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }

}