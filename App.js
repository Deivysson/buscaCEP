import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Deivysson');
  const [input, setInput] = useState('');

  function alteraNome(){
    setNome(input);
    setInput('');
  }


  return(

    <View>

    <TextInput 
    placeholder='Digite o nome...'
    value={input}
    onChangeText={(texto)=> setInput(texto)}
    />

    <TouchableOpacity onPress={alteraNome}>
    <Text> Alterar nome </Text>
    </TouchableOpacity>

    <Text> {nome} </Text>
      
    </View>
  )
}




const styles = StyleSheet.create({
  
});

