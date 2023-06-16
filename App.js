import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenu from './src/pages/HomeMenu';
import HomeVT from './src/tabNavigator/HomeVT';
import Login from './src/pages/Login';
import HomeC from './src/pages/HomeC';
import HomeP from './src/pages/HomeP';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="lojax">
      <Stack.Screen name="lojax" component={HomeMenu} options={{ title: 'Loja X'}}/>
      <Stack.Screen name="homep" component={HomeP} options={{ title: 'Produtos' }}/>
      <Stack.Screen name="login" component={Login} options={{ title: 'Login / Cadastro' }}/>
      <Stack.Screen name="homevt" component={HomeVT} options={{ title: 'Administração de Produtos'}}/>
      <Stack.Screen name="cliente" component={HomeC} options={{ title: 'Cliente' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  // fazer os tabbutton apenas no lugar desejado ou ver a melhor maneira de fazer
  )
}
