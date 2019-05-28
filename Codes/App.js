
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Bulk from './component/tabs/bulk';
import PreFoods from './component/tabs/preFoods';
import Produce from './component/tabs/produce';
import Saved from './component/tabs/save';

export default createAppContainer(createBottomTabNavigator({
  Produce:{
    screen: Produce,
    navigationOptions:{
      tabBarLabel: 'PRODUCE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-nutrition" color={tintColor} size={24}/>
      )
    }
  },
  Bulk:{
    screen: Bulk,
    navigationOptions:{
      tabBarLabel: 'BULK',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'ios-basket' color = {tintColor} size = {24}/>
      )
    }
  },
  PreFoods:{
    screen: PreFoods,
    navigationOptions:{
      tabBarLabel: 'PREPARED',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'ios-pizza' color = {tintColor} size = {24}/>
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'ios-save' color = {tintColor} size = {24}/>
      )
    }
  }},
  {
    tabBarOptions:{
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }));
