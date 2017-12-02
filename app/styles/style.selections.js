import { StyleSheet} from 'react-native';

const Dimensions = require('Dimensions');

const winw = Dimensions.get('window');

export default styles = StyleSheet.create({

  logo: {
    flex: 3,
    width: (winw.width)*0.75,
    alignItems: 'center'
  },
  button: {
    backgroundColor:'#FE9A2E',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
  },
  gButton: {
    flex: 1,
    width: (winw.width)*0.75,
  },
  inputText: {
    height: 40, 
    borderColor: '#CEECF5',
    borderWidth: 1
  },
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
  hungry:{
    height: (winw.width)*0.1,
    width: (winw.width)*0.1,
    borderRadius:10,
    borderColor: '#FF8000',
  },

});


