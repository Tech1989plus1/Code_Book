import React, { Component } from "react";
import {View,TextInput,StyleSheet, SafeAreaView, ScrollView, Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Produce extends Component {
    constructor(props){
        super(props);
        this.state = {}

    }
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
                                style = {styles.inputView}
                            />
                        </View>
                    </View>
                        <ScrollView>
                            <Text>Produce</Text>
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
