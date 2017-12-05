import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';

export default class State {

    static states = {
        'id': null
    }

    static storeId(id) {
        AsyncStorage.setItem('id', id);
        this.states.id = id
    }

    static getId(callback) {
        if (states.id != null) {
            callback(states.id);
        }
        else {
            AsyncStorage.getItem('id').then(
                (id) => {
                    states.id = id
                    callback(id)
                }
            );
        }
        
    }
};
