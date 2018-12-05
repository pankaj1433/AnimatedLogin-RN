import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';

//constants
const { height, width } = Dimensions.get('window');

//custom components
import ScreenTemplate from '../components/UI/screenTemplate';

class Profile extends Component {
    
    constructor () {
        super ();
        this.state = {
            isStatusActive: true
        }
    }
    toggleButton = () => {
        this.setState({
            isStatusActive: !this.state.isStatusActive
        })
    }

    render () {
        let {isStatusActive} = this.state;
        let name = 'Jhon Doe';
        let availableText = 'Available';
        let notAvailableText = 'Not Available';
        return (
            <View style={ styles.container }>
                <ScreenTemplate navigation={this.props.navigation} title={''}>
                    <View style={styles.profileContainer} >
                        <View style={styles.thumbnailWrapper}>
                            <Text style={styles.thumbnail}>{name[0].toUpperCase()}</Text>
                        </View>
                        <View style = {styles.profileHeader}>
                            <Text style={styles.name}>{name}</Text>
                            <TouchableOpacity onPress= {this.toggleButton} style={{flexDirection: 'row',alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{color: '#fff', fontSize: 18, marginRight: 30}}>
                                {isStatusActive ? availableText : notAvailableText}
                                </Text>
                                {
                                    isStatusActive ?
                                    <Feather name='toggle-right' size={30} color="#55b9ac" />:
                                    <Feather name='toggle-left' size={30} color="#da7b6f" />
                                }
                            </TouchableOpacity>
                        </View>
                        <View  style = {styles.profileBody}>
                            <ScrollView>

                            </ScrollView>
                        </View>
                    </View>
                </ScreenTemplate>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: width
    },
    profileContainer : {
        flex: 1,
        position: 'relative'
    },
    profileHeader: {
        height: 200,
        backgroundColor: '#20577a',
        alignItems: 'center'
    },
    profileBody: {
        flex: 2.5,
        backgroundColor: '#eff1f0',
    },
    thumbnail: {
        fontSize: width/8,
        color: '#20577a',
        fontWeight: "bold"
    },
    thumbnailWrapper: {
        height: width/4,
        width: width/4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width/8,
        backgroundColor: '#eff1f0',
        position: 'absolute',
        zIndex: 1,
        top: 155,
        left: (width/2) - (width/8),
        borderWidth: 2,
        borderColor: '#20577a'
    },
    name : {
        color: '#fff',
        fontSize: 24,
        marginBottom: 30
    }
});

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);