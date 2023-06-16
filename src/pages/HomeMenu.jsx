import { View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/HomeMenu.js';
import { db } from '../../firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

export default function HomeMenu({ navigation }) {
  const [produtos, setProdutos] = useState('')
  useEffect(() =>{
    getDocs(collection(db, "produtos")).then(docSnap => {
      let produtos = [];
      docSnap.forEach((doc) => {
        produtos.push({ ...doc.data(), id:doc.id })
      })
      localStorage.setItem('produtos',  JSON.stringify(produtos))
      setProdutos(JSON.parse(localStorage.getItem('produtos')))
    })
  }, [])

  return (
    <View style={styles.container}>
      {/* {
        route.usuarios.map(( user ) => {
            <Text>{user.nome}<Text/>
        })
      } */}
      <Button title='Vendedor' onPress={() => navigation.navigate('login', { usuario: 'Vendedor', produtos: produtos})}/>
      <Button title='Cliente' onPress={() => navigation.navigate('login', { usuario: 'Cliente', produtos: produtos})}/>
    </View>
  );
}
