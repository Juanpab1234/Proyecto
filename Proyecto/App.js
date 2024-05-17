import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Principal from './Principal';
import Login from './Login';
import Registro from './Registro';
import Inversion from './Inversion';
import Invinter from './Invinter';
import Invnac from './Invnac';
import Matpago from './Matpago';  

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Principal' component={Principal} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registro' component={Registro} />
            <Stack.Screen name='Inversion' component={Inversion} />
            <Stack.Screen name='Invinter' component={Invinter} />
            <Stack.Screen name='Invnac' component={Invnac} />
            <Stack.Screen name='Matpago' component={Matpago} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};