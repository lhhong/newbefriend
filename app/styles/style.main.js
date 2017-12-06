import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');

const winw = Dimensions.get('window');

export default styles = StyleSheet.create({

  header: {
    fontSize: 30,
    color:'#585858',
    paddingBottom:10,
  },
  bodyText:{
    fontSize: 15,
    color:'#848484',
    paddingBottom:7,
    textAlign: 'center'
  },
  subText:{
    fontSize: 10,
    color:'#61380B',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentPadding: {
    padding: (winw.width)*0.01,
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: (winw.height)*.5,
    resizeMode: 'stretch',
    // position: 'absolute',
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
});

