import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class main extends Component {    
  state = {
    count: 1,
    id: 0,
    a: '',
    b: '',
    c: '',
    pessoas: []
  }

  addPessoa = () => {
    if((this.state.a == '') || (this.state.b == '') || (this.state.c == ''))
    {
      alert('Preencha todos os campos para prosseguir');
    }else if(this.state.id == 0){
      const p = {
        id: this.state.count,  
        name: this.state.a,
        phone: this.state.b,
        email: this.state.c
      }
      this.state.pessoas.push(p);
      this.state.count = this.state.count + 1;      
    }else{
      var listaPessoas = [];
      listaPessoas = this.state.pessoas;
  
      listaPessoas.forEach(p =>{
        if(p.id == this.state.id){
          this.state.pessoas.pop(p);
          p.id = this.state.id;
          p.name = this.state.a;
          p.phone = this.state.b;
          p.email = this.state.c;   
          this.state.pessoas.push(p);       
        }      
      });      
    }

    this.setState(this.state); 
    this.clearFields();     
    
    console.log(this.state);
  }

  clearFields = () => {
    this.state.id = 0,
    this.state.a = '';  
    this.state.b = '';
    this.state.c = '';
  }

  loadData = (pessoa) => {
    var listaPessoas = [];
    listaPessoas = this.state.pessoas;

    listaPessoas.forEach(p =>{
      if(p.id == pessoa.id){
        this.state.id = pessoa.id;
        this.state.a = pessoa.name;
        this.state.b = pessoa.phone;
        this.state.c = pessoa.email;
        this.setState(this.state);
      }      
    });    
  } 

  delPessoa = (pessoa) => {
    var listaPessoas = [];
    listaPessoas = this.state.pessoas;

    listaPessoas.forEach(p =>{
      if(p.id == pessoa.id){
        this.state.pessoas.pop(p)
        this.setState(this.state);
      }      
    }); 
  }

  render() {    
    return (
      <View>
          
        <Text > Main </Text>        

        <Text style={styles.title}> Nome: </Text>
        <TextInput
          value={this.state.a} 
          onChangeText={a => this.setState({a})}
        />

        <Text> Telefone: </Text>
        <TextInput 
          keyboardType="numeric"
          value={this.state.b}
          onChangeText={b => this.setState({b})} 
        />       

        <Text> Email: </Text>
        <TextInput
          keyboardType="email-address"
          value={this.state.c}
          onChangeText={c => this.setState({c})}
        />

        <Button block alert onPress={() => this.addPessoa()}>
          <Text>Gravar</Text>
        </Button>

        {/* <Button block primary onPress={() => Actions.son({data : this.state})}>
            <Text>Go to son page</Text>            
        </Button> */}
   
        <ScrollView>
          { 
            this.state.pessoas.map(pessoa => {              
              return(                
                <View 
                  style={{flexDirection:'row', justifyContent:'space-between'}}>

                  <View style={{flexDirection:'column'}}>
                    <Text> Nome: {pessoa.name}</Text>
                    <Text> Telefone: {pessoa.phone}</Text>
                    <Text> Email: {pessoa.email}</Text>
                  </View> 
                  <Button 
                    onPress={ () => this.delPessoa(pessoa)}>
                    <Text>   Excluir   </Text>
                  </Button>                 
                  <Button 
                    onPress={ () => this.loadData(pessoa)}>
                    <Text>   Editar   </Text>
                  </Button>
                </View>
              )
          }) 
          } 
        </ScrollView>

      </View>      
    );
  }
}

const styles = StyleSheet.create({
  title:{
    color: 'blue'
  }
})

