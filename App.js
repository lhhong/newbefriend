import React, { Component } from 'react';
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';
import ActivitySelection from './app/components/activity-selection'
import FriendBubbles from './app/components/friend-bubbles'
import MapView from './app/components/map-view'

export default class App extends Component<{}> {
    render() {
        return <Router scenes={scenes} />;
    }
}

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="activitySelection" title="Activity Selection" component={ActivitySelection} initial={true} />
        <Scene key="friendBubbles" title="Friends" component={FriendBubbles} />
        <Scene key="MapView" title="Map" component={MapView} />
    </ Scene>
);

