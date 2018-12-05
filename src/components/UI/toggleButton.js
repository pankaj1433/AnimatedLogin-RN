import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
class ToggleButton extends React.Component {

    state = {
        _widthAnimation: new Animated.Value(width-80),
        showIcon: false
    }

    callPropsHandler = () => {
        this.setState({
            showIcon: true
        },()=>{
            setTimeout(() => {
                this.props.handler && this.props.handler();     
            }, 1000);
        });
    }

    onClickHandler = () => {
        Animated.sequence([
            Animated.timing(this.state._widthAnimation, {
              toValue: 60,
              duration: 300,
            }),
        ]).start(this.callPropsHandler);
    }

    render() {
        let {buttonText, icon} = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onClickHandler}>
                <Animated.View style={{ width: this.state._widthAnimation , alignItems: 'center', justifyContent:'center', backgroundColor: '#184d7f', height :60 , borderRadius: 30 }}>
                    {
                        this.state.showIcon ?
                        <Feather name={icon} size={20} color="#fff" />:
                        <Text style={{color: '#fff'}}>{buttonText.toUpperCase()}</Text>
                    }
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    
}

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

export default ToggleButton;
