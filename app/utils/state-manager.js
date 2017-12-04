import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';

export default class State {

    states = {
        'id': null
    }

    function storeId(id) {
        AsyncStorage.setItem('id', id);
        states.id = id
    }

    function getId(callback) {
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
