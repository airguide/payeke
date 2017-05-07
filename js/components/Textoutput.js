/*******************************************************************************
 *
 * Textoutput.js
 * Customized text option
 *
 *  _________________________________
 *  |                               |
 *  | ContainerName <smallcaps>     |
 *  |                               |
 *  |    OUTPUT VALUE               |
 *  |_______________________________|
 *
 * Created by vhn on 07/05/2017.
 /*****************************************************************************/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Textoutput extends Component {
  render(){
    return(
        <View style = { ComponentStyle.componentContainer }>
          <Text style = { ComponentStyle.textName } >{ this.props.name }</Text>
          <Text style = { ComponentStyle.textValue }>{ this.props.value }</Text>
        </View>
    )
  }
}

const ComponentStyle = StyleSheet.create({
  componentContainer:{
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textName: {
    textAlign: 'left',
    fontFamily: 'Exo2-ExtraLight',
    color: '#7100f5',
  },
  textValue: {
    fontFamily: 'Exo2-Regular',
    fontSize: 30,
    textAlign: 'right',
  }
});