import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';
import AnimatedButton from '../components/UI/animatedButton';
const { width } = Dimensions.get('window');

class LoginScreen extends Component {

    constructor () {
        super();
        this.state = {
            mobileNo: '',
            password: ''
        }
    }

    loginHandler = () => {
        this.props.navigation.navigate('App');
    }

    render () {
        let { height } = Dimensions.get('window');
        return (
            <View style={ [styles.container, { height }] }>
                <View style={ styles.imageContainer }>
                    <Image 
                        source={ require('./../assets/logo.png') }
                        style = {{ height: 75 }}
                        resizeMode = { 'contain' }
                    />
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={ styles.formContainer }>
                        <View style={{flex:1 ,flexDirection: 'row'}}>
                            <View style={{width: 40,height: 60, alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                                <View style={{borderRightWidth: 2, borderColor: '#fff', paddingHorizontal: 10}}>
                                    <Feather name="user" size={18} color="#fff" />
                                </View>
                            </View>
                            <TextInput 
                                placeholder="Mobile No."
                                placeholderTextColor = '#fff'
                                value = { this.state.mobileNo }
                                onChangeText = { (mobileNo) => this.setState({ mobileNo }) }
                                style = { styles.input }
                            />
                        </View>
                        <View style={{height:2 ,width: width - 80, backgroundColor: '#fff'}}></View>
                        <View style={{flex:1, flexDirection: 'row'}}>
                            <View style={{width: 40,height: 60, alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                                <View style={{borderRightWidth: 2, borderColor: '#fff', paddingHorizontal: 10}}>
                                    <Feather name="lock" size={18} color="#fff" />
                                </View>
                            </View>
                            <TextInput 
                                placeholder="Password"
                                placeholderTextColor = '#fff'
                                value = { this.state.password }
                                onChangeText = { (password) => this.setState({ password }) }
                                style = { styles.input }
                            />
                        </View>
                    </View>
                </View>
                <View style={ styles.buttonContainer }>
                    <AnimatedButton buttonText="Login" icon="check" handler={this.loginHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 30
    },
    formContainer: {
        height: 122,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#184d7f',
        width: width - 80,
        borderRadius: 20,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 60,
        color: '#fff',
        flex:1,
        fontSize: 15
    },
    buttonContainer: {
        flex: 1,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LoginScreen;