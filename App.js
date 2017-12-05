import React, { Component } from 'react';
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';
import ActivitySelection from './app/components/activity-selection'
import FriendBubbles from './app/components/friend-bubbles'
import MapView from './app/components/map-view'
import LoadingScreen from './app/components/loading-screen'
import SignIn from './app/components/sign-in'
import TimePicker from './app/components/time-picker-module'

export default class App extends Component<{}> {
    render() {
        return <Router scenes={scenes} />;
    }
}

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="loadingScreen" title="Log In" component={LoadingScreen} initial = {true}/>
        <Scene key="activitySelection" title="Mood Selection" component={ActivitySelection}/>
        <Scene key="friendBubbles" title="Friends" component={FriendBubbles} />
        <Scene key="mapView" title="Map" component={MapView} />
        <Scene key="signIn" title="SignIn" component={SignIn} />       
        <Scene key="timePicker" title="Time Picker" component={TimePicker} />   
    </ Scene>
);

