import { View, Button } from 'react-native';
import styles from '../styles/HomeMenu.js';

export default function HomeMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='Vendedor' onPress={() => navigation.navigate('login', { usuario: 'Vendedor' })}/>
      <Button title='Cliente' onPress={() => navigation.navigate('login', { usuario: 'Cliente' })}/>
      <Button title='Entregador' onPress={() => navigation.navigate('login', { usuario: 'Entregador' })}/>
    </View>
  );
}