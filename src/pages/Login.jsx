import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from '../styles/Login.js';

export default function Login({ navigation, route }) {
  // fazer validação e ver se os dados estão preenchidos ***
  const Logar = () =>{
    const usuario = route.params.usuario
    console.log('Criar a funcao de logar pra pesquisar no banco certo de acordo com o props')
    if (usuario === 'Vendedor'){
      navigation.navigate('cadastro_produtos')
    }
    else if(usuario === 'Cliente'){
      navigation.navigate('cliente')
    }
    else if(usuario === 'Entregador'){
      navigation.navigate('entregador')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login {route.params.usuario}</Text>
      <View style={styles.forms}>
        <TextInput style={styles.inputs} placeholder="Email" keyboardType="email-address"></TextInput>
        <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} maxLength={16}></TextInput>
        <Button title="ENTRAR" style={styles.button} onPress={Logar}></Button>
      </View>
    </View>
  );
}