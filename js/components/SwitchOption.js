/*******************************************************************************
 *
 * Switch.js
 * custom Switch implementation
 *
 * Created by vhn on 07/05/2017.
 /*****************************************************************************/

import React, { Component } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default class SwitchOption extends Component {
  render(){
    return(
        <View style = { ComponentStyle.componentContainer }>
          <View style = { ComponentStyle.textContainer }>
            <Text style={ ComponentStyle.text }> {this.props.name} </Text>
          </View>
          <View style = { Component.switchContainer}>
            <Switch/>
          </View>
        </View>
    )
  }
}

const ComponentStyle = StyleSheet.create({
  componentContainer : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 20,
  },

  textContainer: {
  },

  text: {
    color: 'black',

    fontFamily: 'Exo2-Light',
    textAlign: 'left'
  },

  switchContainer: {
    marginTop: 40
  }
});