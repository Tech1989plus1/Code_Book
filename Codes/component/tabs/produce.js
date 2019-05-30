import React, { Component } from "react";
import {View,TextInput,StyleSheet, SafeAreaView, FlatList, ScrollView} from "react-native";
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import {contact as PLU} from '../json/db';
import Contain from '../API/cotains';

class Produce extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: PLU, fullData: PLU, query: ''
        }

    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => (
        <ListItem
            roundAvatar
            leftAvatar = {{ source: {uri: `${item.image}`}}}
            title = {item.first_name + " " + item.last_name}
            subtitle = {item.phone_number} 
        />
    );

    _renderSepartor = () => {
        return (
            <View style = {{height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: "17%"}}/>
        );
    }

    _updateQuery = query => {
        const formatQuery = query.toLowerCase();
        const data = _.filter(this.state.fullData, user => {
            return Contain(user, formatQuery);
        })
        
        this.setState({query: formatQuery, data});
      };

    render() {
        return (
            <SafeAreaView style = {{flex: 1}}>
                <View style = {{flex: 1}}>
                    <View style = {styles.container}>
                        <View style = {styles.containerTop}>
                            <Icon name = 'ios-search' size = {20} style = {styles.iconStyle}/>
                            <TextInput
                                placeholder = 'Search ...'
                                placeholderTextColor = '#b6babf'
                                onChangeText={this._updateQuery}
                                style = {styles.inputView}
                            />
                        </View>
                    </View>
                        <ScrollView>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                                ItemSeparatorComponent = {this._renderSepartor}
                            />
                        </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Produce;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    iconStyle:{
        padding: 10,
        color: '#4c9ed9'
    },
    inputView: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white',
        padding: 10
    },
    containerTop: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2
    }
});
