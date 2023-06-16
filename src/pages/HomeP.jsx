import { Text, View, FlatList } from 'react-native';
import styles from '../styles/HomeP.js';
import { useEffect, useState } from 'react';

export default function HomeP({ navigation, route }) {
  const repositorio = 'https://firebasestorage.googleapis.com/v0/b/somativa-lulu.appspot.com/o/imgs%2F'
  const media = '?alt=media'
  const [produtos, setProdutos] = useState('')
  
  useEffect(() =>{
    const propsProd = route.params.produtos
    console.log('------ ', propsProd)
    setProdutos(propsProd ? propsProd :JSON.parse(localStorage.getItem('produtos')))
  }, [localStorage.getItem('produtos')])

  return (
    <View style={styles.container}>
    {/* <FlatList */}
    {/* //     numColumns={3}
    //     data={produtos}
    //     renderItem={({p}) => { */}
    {/* //       return(
    //         <>
    //           <p>{p && p.name}</p>
    //         </>
    //       ) */}
        {/* // }}  */}
      {produtos && produtos.map((p, index) => (
        <View style={styles.conjuntoProd} key={index}>
          <p>{p.name}</p>
          <p>R$ {p.preco}</p>
          <img src={repositorio + p.urlFoto + media} style={{width: 80, height: 80}}/>
          
        </View>
      ))}
      {/* /> */}
    <Text>HomeP</Text>
    </View>
  );
}