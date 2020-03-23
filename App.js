import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Inicio from './screen/Inicio';
import Principal from './screen/Principal';
import Principal1 from './screen/Principal1';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Principal' component={Principal}/>
        <Stack.Screen name='Principal1' component={Principal1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function loginView(){
  return(
    <Login></Login>
  );
}
function InicioView(){
  return(
    <Inicio></Inicio>
  );
}
function registroView() {
  return (
      <Registro></Registro>
      
  );
}
export default App;