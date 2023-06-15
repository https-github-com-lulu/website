import styles from '../styles/Login.js';
import React, { useState } from 'react';
import { Button, Image, View, TextInput, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeV({ navigation }) {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [qtd, setQtd] = useState('')
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBase64(result.assets[0].base64)
      console.log(result)
    }
  };
  
  // const cadastrarProd = async () =>{
  //   console.log('Mudei fazer navigation aq')
  //   navigation.navigate('homes')

    // const filename = image.substring(image.lastIndexOf('/') + 1, image.length)
    // const extensao = filename.substring(filename.lastIndexOf('.') + 1, filename.lenght) //testar com + 1
    // const formData = new FormData() 
    // console.log(filename)
    // console.log(extensao) // testar *
    // formData.append('file', JSON.parse(JSON.stringify({
      // name: nome,
      // uri: image,
      // type: extensao,
    // })))

    // await fetch('http://localhost:3000/api/produto', {
      // formData,
      // method: 'POST',
      // body: JSON.stringify({nome, preco, qtd}),
      // headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
      // }
    // })
    // mutate('http://localhost:3000/api/produto')
    // setNome('')
    // setPreco('')
    // setQtd('')
    // setImage('')
  // }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Produtos</Text>
      {image && <Image source={{ uri: image }} style={styles.img} />}
      <Button title="Escolher imagem..." onPress={pickImage}/>
      <View style={styles.forms}>
        <TextInput style={styles.inputs} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></TextInput>
        <TextInput style={styles.inputs} placeholder="Preço em R$" value={preco} onChange={(e) => setPreco(e.target.value)}></TextInput>
        <TextInput style={styles.inputs} placeholder="Quantidade" value={qtd} onChange={(e) => setQtd(e.target.value)}></TextInput>
        <Button title="CADASTRAR" style={styles.button}></Button>
      </View>
    </View>
    </>
  );
}