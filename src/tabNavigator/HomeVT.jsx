import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeP from '../pages/HomeP.jsx'
import Logout from '../pages/Logout.jsx'
import CadastroP from '../pages/CadastroP.jsx'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomeVT( {navigation} ) {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="home_produto" component={HomeP} options={{tabBarLabel: '', tabBarIcon: () => (<Ionicons name="home" size={30} />)}}/>
        <Tab.Screen name="cadastro_produto" component={CadastroP}  options={{tabBarLabel: '', tabBarIcon: () => (<AntDesign name="plussquare" size={30} />)}}/>
        <Tab.Screen name="logout" component={Logout}  options={{tabBarLabel: '', tabBarIcon: () => (<MaterialCommunityIcons name="logout" size={30} onPress={() => navigation.navigate('lojax')}/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}