import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Styles } from './../styles/main.js';

export class TertiaryScreen extends React.Component {
    static navigationOptions = {
        title: 'This is the Third Screen',
        headerStyle: {
            backgroundColor: 'powderblue'
        },
        headerTintColor: '#3A6A91'
    };

    render () {
        return (
            <ScrollView style={[Styles.backgroundColorWhite]}>
                <Text>Full Width Column</Text>
                <View style={{height: 64, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>1</Text>
                </View>

                <Text>Half Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                </View>

                <Text>Third Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>3</Text>
                    </View>
                </View>

                <Text>Forth Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>3</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#3A6A91', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>4</Text>
                    </View>
                </View>

                <Text>Half/Forth Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 2, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>3</Text>
                    </View>
                </View>

                <Text>One-Third/Two-Thrid Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 1.5, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 2.5, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                </View>

                <Text>Two-Third/One-Thrid Width Columns</Text>
                <View style={{height: 64, flexDirection: 'row'}}>
                    <View style={{flex: 2.5, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1.5, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                </View>

                <Text style={[Styles.fontSizeXXL, Styles.fontWeightBold, Styles.colorRed]}>THIRD</Text>
                <Text style={Styles.fontSizeXXL}>THIRD</Text>
                <Text style={[Styles.fontSizeXXL, Styles.fontWeightBold, Styles.colorBlue]}>THIRD</Text>
                <Text style={Styles.fontSizeXXL}>THIRD</Text>
            </ScrollView>
        );
    }
}