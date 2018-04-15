import React, { Component } from 'react';
import {  View, Text, FlatList } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class son extends Component {
  componentWillMount () {
    console.log(this.props);
  }
  render() {
    
    return (
      <View>
        <Text> Son </Text>

        <Text> Nome: {this.props.data.name}</Text>
        
        <Text> Sobrenome: {this.props.data.lastName} </Text>
        
        <Text> Telefone: {this.props.data.phone} </Text>
        
        <Text> Email: {this.props.data.email}</Text>
        
        
        <Button block primary onPress={() => Actions.main()}> 
            <Text>Go to main page</Text>            
        </Button>

      </View>
    );
  }
}
