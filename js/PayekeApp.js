/*******************************************************************************
 *
 * PakeyApp.js
 * Main Entry Point
 *
 * Created by vhn on 05/05/2017.
 /*****************************************************************************/

import React, { Component } from 'react';
import { StyleSheet,
        View,
        TouchableOpacity,
        Text,
        StatusBar,
        Button,
        Image,
        TextInput,
        KeyboardAvoidingView } from 'react-native'

import SwitchOption from './components/SwitchOption';
import Textoutput from './components/Textoutput';

const kesSymbol = require('./assets/img/kenyashillng.png');

export default class PayekeApp extends Component {
  render(){
    return(
        <View style = { screenStyle.appContainer }>
          <StatusBar backgroundColor={'#7100f5'} barStyle={'light-content'}/>
          <View style = { screenStyle.appGrossSalary }>
            <View style = { screenStyle.grossSalaryPeriod } >
              <TouchableOpacity>
                <Text style={ screenStyle.grossSalaryPeriodText }>January</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ screenStyle.grossSalaryPeriodText } >December</Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView keyboardVerticalOffset= {120} style={ screenStyle.grossSalaryAmountStyle }>
              <TextInput style={ screenStyle.grossSalaryAmount }
                           keyboardType = {'numeric'}
                           placeholderTextColor = {'lightgray'}
                           placeholder={'Gross salary /='}
                           returnKeyType = 'go'
                           inlineImageLeft = "kenyashillng.png"
                />
            </KeyboardAvoidingView>
          </View>
          <View style = { screenStyle.appTimeFrame }>
            <View style = { screenStyle.appTimeFramePeriod } >
              <TouchableOpacity>
                <Text style={ screenStyle.grossSalaryPeriodText }>Month</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ screenStyle.grossSalaryPeriodText } >Year</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style = { screenStyle.appTaxOptions }>
            <SwitchOption name='Personal Relief'/>
            <SwitchOption name='NSSF Contribution'/>
            <SwitchOption name='NSSF Rates'/>
            <SwitchOption name='NHIF Contribution'/>
          </View>

          <View style = { screenStyle.appCalculations }>
            <View style = { screenStyle.appCalculationsRow }>
              <Textoutput name="NSSF Contribution" value="2330"/>
              <Textoutput name="Taxable Pay" value="0"/>
            </View>
            <View style = { screenStyle.appCalculationsRow }>
              <Textoutput name="Personal Relief" value="0"/>
              <Textoutput name="Insurance Relief" value="0"/>
            </View>
            <View style = { screenStyle.appCalculationsRow }>
              <Textoutput name="PAYE" value="0"/>
              <Textoutput name="NHIF Contribution" value="0"/>
            </View>
            <View style = { screenStyle.appCalculationsRow }>
              <Textoutput name="Net Pay" value="0"/>
              <Textoutput name="Effective Tax Rate" value="0"/>
            </View>
          </View>
          <Button color = 'green' title="Calculate" onPress={ () => {} }/>
        </View>
    )
  }
}

const screenStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  appGrossSalary: {
    flex: .15,
    backgroundColor: '#7100f5',
  },

  grossSalaryPeriod: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  grossSalaryPeriodText: {
    color: 'white',
    paddingTop: 10,
    fontFamily: 'Exo2-Light',
    fontSize: 15
  },
  grossSalaryAmountStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10,
  },
  grossSalaryAmount: {
    color: 'white',
    fontFamily: 'Exo2-Light',
    fontSize: 40,
    textAlign: 'center',
    width: '80%'
  },

  appTimeFrame : {
    flex: .08,
    backgroundColor: 'black',
  },
  appTimeFramePeriod: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  appTaxOptions: {
    flex: .20,
    backgroundColor: '#d3dedf',
  },

  appCalculations: {
    flex: .42,
    backgroundColor: 'white'
  },

  appCalculationsRow: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around'
  },
});