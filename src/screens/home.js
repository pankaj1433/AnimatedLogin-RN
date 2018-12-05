import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from "moment";
import { Feather } from '@expo/vector-icons';

//constants
const { height, width } = Dimensions.get('window');
import {ORDER_LIST} from '../constants/data.constants';

import ScreenTemplate from '../components/UI/screenTemplate';
class HomeScreen extends Component {
    
    constructor () {
        super ();
        this.state = {
            openOrder: null
        }
    }

    renderOrder = (order_id) => {
        if (order_id == this.state.openOrder) {
            this.setState({
                openOrder: null
            });
        }
        else {
            this.setState({
                openOrder: order_id
            });
        }
    }

    renderRows = (rowData) => {
        let data = rowData.item;
        let {openOrder} = this.state;
        return (
            <View key={data.order_id} style={styles.rowWrapper}>
                <View style={{flexDirection: 'row', marginBottom: 8}}>
                    <Text style={{color:'#555', fontSize: 14}}>Customer Name: </Text>
                    <Text style={{color:'#557f9d', fontSize: 14}}>{data.customerDetail.name}</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 8}}>
                    <Text style={{color:'#555', fontSize: 14}}>Customer Address: </Text>
                    <Text style={{color:'#557f9d', fontSize: 14}}>{data.customerDetail.address}</Text>
                </View>
                <TouchableOpacity onPress = {() => this.renderOrder(data.order_id)} style={{flexDirection: 'row', paddingVertical: 8}}>
                    <Text style={{color:'#555', fontSize: 14, marginRight: 5}}>ORDER</Text>
                    {
                        openOrder && openOrder === data.order_id ?
                        <Feather name='chevron-down' size={15} color="#555" />:
                        <Feather name='chevron-right' size={15} color="#555" />   
                    }
                </TouchableOpacity>
                {
                    openOrder && openOrder === data.order_id &&
                    <View style={styles.orderBox}>
                        <View style={{backgroundColor: '#f1b258', padding: 10}}>
                            <Text style={{color:'#557f9d', fontSize: 14, marginBottom: 5}}>{data.orderDetails.storeName}</Text>
                            <Text style={{color:'#557f9d', fontSize: 14}}>{data.orderDetails.location}</Text>
                        </View>
                        <View style={styles.orderItems}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={{color:'#555555', fontSize: 14, marginBottom: 5, fontWeight: 'bold'}}>ITEM</Text>
                                <Text style={{color:'#555555', fontSize: 14, marginBottom: 5, fontWeight: 'bold'}}>QTY.</Text>
                            </View>
                            {
                                data.orderDetails.orderItems.map((order,index) => 
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{color:'#557f9d', fontSize: 14, marginBottom: 3}}>{order.name}</Text>
                                        <Text style={{color:'#557f9d', fontSize: 14, marginBottom: 3}}>{order.quantity}</Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                }
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5}}>
                    <Text style={{color:'#f1b258', fontSize: 12}}>{moment(data.date).format("DD MMM, YYYY h:m a")}</Text>
                </View>
            </View>
        )
      }

    render () {
        return (
            <View style={ styles.container }>
                <ScreenTemplate padding={20} navigation={this.props.navigation} title={'Home'}>
                <View style={{flex:1}}>
                <FlatList
                    style={{flex:1}}
                    data={ORDER_LIST}
                    renderItem={ (item) =>this.renderRows(item)}
                    ItemSeparatorComponent = {() => <View style = {{flex:1,height:1,backgroundColor:'#184d7f'}} />}
                    />
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
    rowWrapper : {
        flex: 1,
        paddingVertical: 10,
    },
    orderBox : {
        flexDirection: 'column', 
        marginBottom: 8, 
        borderRadius: 10, 
        borderColor: '#f1b258',
        borderWidth: 1,
        overflow: 'hidden'
    },
    orderItems : {
        padding: 10
    }
});

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);