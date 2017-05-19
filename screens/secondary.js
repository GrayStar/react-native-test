import React, { Component } from 'react';
import { Button, View } from 'react-native';

export class SecondaryScreen extends React.Component {
    static navigationOptions = {
        title: 'Secondary Screen',
        headerBackTitle: 'Secondary Screen',
        headerTruncatedBackTitle: null
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    title = 'Go Back to Tertiary Screen'
                    onPress = { () => navigate('Tertiary') }
                />
            </View>
        );
    }
}