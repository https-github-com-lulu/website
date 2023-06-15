import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styles from '../styles/Login.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config.js';

export default function Login({ navigation, route }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  // fazer validação e ver se os dados estão preenchidos ***
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
    const usuario = route.params.usuario
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // console.log('Login Efetuado')
      // const user = userCredential.user
      if (usuario === 'Vendedor'){
        navigation.navigate('cadastro_produtos')
      }
      else if(usuario === 'Cliente'){
        navigation.navigate('cliente')
      }
      else if(usuario === 'Entregador'){
        navigation.navigate('entregador')
      }
      // console
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login {route.params.usuario}</Text>
      <View style={styles.forms}>
        <TextInput style={styles.inputs} placeholder="Email" keyboardType="email-address" onChangeText={(email => setEmail(email))} maxLength={60}></TextInput>
        <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} onChangeText={(password => setPassword(password))} maxLength={16}></TextInput>
        <Button title="ENTRAR" style={styles.button} onPress={Logar}></Button>
        <Button title="CADASTRAR" style={styles.button} onPress={Cadastrar}></Button>
      </View>
    </View>
  );
}