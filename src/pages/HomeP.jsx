import { Text, View } from 'react-native';
import styles from '../styles/HomeP.js';
import { useEffect, useState } from 'react';

export default function HomeP({ navigation, route }) {
  const repositorio = 'https://firebasestorage.googleapis.com/v0/b/somativa-lulu.appspot.com/o/imgs%2F'
  const media = '?alt=media'
  const [produtos, setProdutos] = useState('')
  
  useEffect(() =>{
    setProdutos(route.params.produtos)
  }, [localStorage.getItem('produtos')])

  return (
    <View style={styles.container}>
        <View style={styles.conjuntoProd}>
          {produtos && produtos.map((p, index) => (
            <p key={index}>{p.name}</p>
          ))}
            {/* <View style={{width:100, height: 100, backgroundColor:'purple'}}>
            </View>
            <View style={{width:100, height: 100, backgroundColor:'blue'}}>
            </View>
            <View style={{width:100, height: 100, backgroundColor:'black'}}>
            </View> */}
        </View>
      <Text>HomeP</Text>
    </View>
  );
}