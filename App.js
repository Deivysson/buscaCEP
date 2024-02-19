import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import api from './src/services/api';



export default function App(){

  const [cep, setCep] = useState('');

  return(

    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
      <Text style={styles.text}>Digite o CEP desejado</Text>
      <TextInput 
      style={styles.input}
      placeholder='EX: 71687444'
      value={cep}
      onChangeText={(texto)=> setCep(texto)}
      keyboardType='numeric'
      />
      </View>

    <View style={styles.areaBtn}>
      <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd'}] }>
        <Text style={styles.botaoText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { backgroundColor: '#ff0000'}] }>
        <Text style={styles.botaoText}>Limpar</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.resultado}>
      <Text style={styles.itemText}>CEP: 7900000</Text>
      <Text style={styles.itemText}>Logradouro: Rua dos DEV</Text>
      <Text style={styles.itemText}>Bairro: Distrito Federal</Text>
      <Text style={styles.itemText}>Cidade: Brasilia</Text>
      <Text style={styles.itemText}>Estado: DF</Text>
    </View>

    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 22,
  }
  
});

