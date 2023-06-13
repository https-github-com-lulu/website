import styles from '../styles/Login.js';
import React, { useState } from 'react';
import { Button, Image, View, TextInput, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { mutate } from 'swr';

export default function HomeC({ navigation }) {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [qtd, setQtd] = useState('')

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const cadastrarProd = async () =>{
    await fetch('http://localhost:3000/api/produto', {
      method: 'POST',
      body: JSON.stringify({nome, preco, qtd}),
      headers: {'Content-Type': 'application/json'}
    })
    mutate('http://localhost:3000/api/produto')
    setNome('')
    setPreco('')
    setQtd('')
    setImage('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Produtos</Text>
      {image && <Image source={{ uri: image }} style={styles.img} />}
      <Button title="Escolher imagem..." onPress={pickImage}/>
      <View style={styles.forms}>
        <TextInput style={styles.inputs} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></TextInput>
        <TextInput style={styles.inputs} placeholder="Preço em R$" value={preco} onChange={(e) => setPreco(e.target.value)}></TextInput>
        <TextInput style={styles.inputs} placeholder="Quantidade" value={qtd} onChange={(e) => setQtd(e.target.value)}></TextInput>
        <Button title="CADASTRAR" style={styles.button} onPress={cadastrarProd}></Button>
      </View>
    </View>
  );
}