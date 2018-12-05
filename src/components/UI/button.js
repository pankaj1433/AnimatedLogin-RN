import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ onClick, buttonText }) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#184d7f',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            paddingVertical: 10,
            shadowColor: '#000000',
            shadowOffset: {
            width: 0,
            height: 1
            },
            shadowRadius: 2,
            shadowOpacity: 0.5,
            elevation: 4
        },
        buttonText: {
            color: 'white'
        }
    });

    return (
        <TouchableOpacity onPress={ onClick } style={ styles.button }>
            <View>
                <Text style={ styles.buttonText }>{ buttonText }</Text>
            </View>
        </TouchableOpacity>
    );
};