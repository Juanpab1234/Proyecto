import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Principal from './Principal';
import Login from './Login';
import Registro from './Registro';
import inversion from './inversion';
import invinter from './invinter';
import invnac from './invnac';
import matpago from './matpago';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator>
          <Stack.Screen name='Principal' component={Principal} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registro' component={Registro} />
            <Stack.Screen name='Inversion' component={inversion} />
            <Stack.Screen name='Invinter' component={invinter} />
            <Stack.Screen name='Invnac' component={invnac} />
            <Stack.Screen name='Matpago' component={matpago} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};