import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../views/Login';
import Home from '../views/Home';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import RecipeDetailsScreen from "../views/RecipeDetailsScreen";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: '#AD40AF',

    }
  };

  return (
    <Stack.Navigator /* screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTintColor: '#fff'
    }} initialRouteName='Welcome' */  screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Bienvenido" component={Login} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
    {/*   <Stack.Screen name="Register"  options={{headerShown: false}} component={RegisterScreen} /> */}
    </Stack.Navigator>
  )
}

export default AuthStack
