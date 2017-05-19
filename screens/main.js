import React, { Component } from 'react';
import { Button } from 'react-native';

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Main Screen',
        headerBackTitle: 'Main Screen',
        headerTruncatedBackTitle: null
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <Button
                title = 'Go To Secondary Page'
                onPress = { () => navigate('Secondary') }
            />
        );
    }
}