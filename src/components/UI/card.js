import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({ children, style }) => {
    return (
        <View style={ [styles.card, style] }>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 3
    }
});