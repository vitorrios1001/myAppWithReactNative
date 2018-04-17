import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button, Container, Header, Content, Form, Item, 
         Input, Label, Left, Body, Right, Title, Card, CardItem} from 'native-base';
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
      //Adding pessoa
      const p = {
        id: this.state.count,  
        name: this.state.a,
        phone: this.state.b,
        email: this.state.c
      }
      this.state.pessoas.push(p);
      alert(p.name+' foi adicionado a lista com sucesso!'); 
      this.state.count = this.state.count + 1;      
    }else{
      //Editing pessoa
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
          alert(p.name+' foi editado com sucesso!');     
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

      <Container>
        <Header>
        <Left/>
          <Body>
            <Title>My First App</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome</Label>
              <Input 
                value={this.state.a} 
                onChangeText={a => this.setState({a})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Telefone</Label>
              <Input 
                keyboardType="numeric"
                value={this.state.b}
                onChangeText={b => this.setState({b})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                keyboardType="email-address"
                value={this.state.c}
                onChangeText={c => this.setState({c})}
              />
            </Item>
          </Form>
         
          <Button block success onPress={() => this.addPessoa()}>
            <Text>Gravar</Text>
          </Button>

          <ScrollView>            
            { 
              this.state.pessoas.map(pessoa => {              
                return( 
                  <Card key={pessoa.id} >
                    <CardItem>  
                      <View  style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Left>
                          <View style={{flexDirection:'column'}}>
                            <Text> Nome: {pessoa.name}</Text>
                            <Text> Telefone: {pessoa.phone}</Text>
                            <Text> Email: {pessoa.email}</Text>
                          </View>
                        </Left>
                        <Right>
                          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Button danger
                              onPress={ () => this.delPessoa(pessoa)}>
                              <Text>   Excluir   </Text>
                            </Button>  
                                            
                            <Button warning
                              onPress={ () => this.loadData(pessoa)}>
                              <Text>   Editar   </Text>
                            </Button>
                          </View> 
                        </Right>                       
                      </View>
                    </CardItem>
                  </Card>
                )
              }) 
            }             
          </ScrollView>
        </Content>
      </Container>    
    );
  }
}



