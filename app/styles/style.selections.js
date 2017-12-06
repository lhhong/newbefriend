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
  userBubble:{
    justifyContent:'center',
    margin: 10,
  },
  profileButton:{
    height: 90,
    width: (winw.width)*0.93,
    margin: 10,
    marginBottom: 0,
    borderRadius: 5,
    paddingRight: 5,
    justifyContent: 'center',
  },
  profilepic:{
    height: 90,
    width: 90,
    alignSelf: 'flex-start',
    borderRadius: 5
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
  moodSelection:{
    height: (winw.width)*0.2,
    width: (winw.width)*0.90,
    margin: 8,
    justifyContent: 'center',
  },

  fbLogin:{
    //Don't change width and height unless changing aspect ratio
    //Use scaleX and scaleY 
    width: 190, 
    height: 30, 
    transform: [
      {scaleX: 1.4},
      {scaleY: 1.4}
    ],
    marginTop: 20
  }

});


