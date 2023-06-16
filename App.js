import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenu from './src/pages/HomeMenu';
import HomeVT from './src/tabNavigator/HomeVT';
import Login from './src/pages/Login';
import HomeC from './src/pages/HomeC';
import HomeE from './src/pages/HomeE';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="lojax">
      <Stack.Screen name="lojax" component={HomeMenu} options={{ title: 'Loja X'}}/>
      <Stack.Screen name="login" component={Login} options={{ title: 'Login / Cadastro' }}/>
      <Stack.Screen name="homevt" component={HomeVT} options={{ title: 'Administração de Produtos'}}/>
      <Stack.Screen name="cliente" component={HomeC} options={{ title: 'Cliente' }}/>
      <Stack.Screen name="entregador" component={HomeE} options={{ title: 'Entregador' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  // fazer os tabbutton apenas no lugar desejado ou ver a melhor maneira de fazer
  )
}
