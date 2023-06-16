import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styles from '../styles/Login.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config.js';

export default function Login({ navigation, route }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const Cadastrar = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Conta Criada')
      const user = userCredential.user
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const Logar = () =>{
    const produtos = route.params.produtos
    const usuario = route.params.usuario
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (usuario === 'Vendedor'){
        navigation.navigate('cadastro_produtos', { produtos: produtos })
      }
      else if(usuario === 'Cliente'){
        navigation.navigate('cliente')
      }
      else if(usuario === 'Entregador'){
        navigation.navigate('entregador')
      }
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{route.params.usuario}</Text>
      <View style={styles.forms}>
        <TextInput style={styles.inputs} placeholder="Email" keyboardType="email-address" onChangeText={(email => setEmail(email))} maxLength={60}></TextInput>
        <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} onChangeText={(password => setPassword(password))} maxLength={16}></TextInput>
        <View style={styles.botoes}>
          <Button title="CADASTRAR" style={styles.botao} onPress={Cadastrar}></Button>
          <Button title="ENTRAR" style={styles.botao} onPress={Logar}></Button>
        </View>
      </View>
    </View>
  );
}