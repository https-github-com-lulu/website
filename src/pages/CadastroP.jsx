import styles from '../styles/Login.js';
import React, { useState } from 'react';
import { Button, Image, View, TextInput, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase-config.js';
import { Alert } from 'react-native-web';

export default function HomeV( { naviagtion, route } ) {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [qtd, setQtd] = useState('')
  const [image, setImage] = useState(null);
  const [idFoto, setidFoto] = useState('');
  const [prodData, setProdData] = useState(false)

  const pickImage = async () => {
    setidFoto('')
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.uri);
      setidFoto(Date.now())
    }
  };
  
  const cadastrarProd = async () =>{
    if ( image != null && nome != '' && preco != '' && qtd != ''){
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
          resolve(xhr.response)
        };
        xhr.onerror = function(){
          reject(new TypeError("Network request failed"))
        };
        xhr.responseType = "blob"
        xhr.open("GET", image, true)
        xhr.send(null)
      })

      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };
      
      const storageRef = ref(storage, 'imgs/' + idFoto);
      const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
            case 'running':
              console.log('Upload is running');
              break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
            case 'storage/canceled':
              break;
              case 'storage/unknown':
                break;
        }
      },
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
        })
      )
      const docRef = await addDoc(collection(db, "produtos"), {
        name: nome,
        preco: parseFloat(preco),
        qtd: parseInt(qtd),
        urlFoto: idFoto
      });
      setImage('')
      setNome('')
      setPreco('')
      setQtd('')
      
      getDocs(collection(db, "produtos")).then(docSnap => {
        let produtos = [];
        docSnap.forEach((doc) => {
          produtos.push({ ...doc.data(), id:doc.id })
        })
        localStorage.setItem('produtos',  JSON.stringify(produtos))
      })
    }
    else{
      Alert.alert('Preencha todos os campos e tente novamente!')
    }
  }
            
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
          <Button title="CADASTRAR" style={styles.button} onPress={cadastrarProd}></Button>
        </View>
      </View>
    </>
  );
}