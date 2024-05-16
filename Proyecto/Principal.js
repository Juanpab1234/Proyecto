import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Principal({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.Bienvenido}>
        <Image
          style={styles.Logo}
          source={{
            uri: "https://live.staticflickr.com/65535/53649348379_4271064c62_n.jpg",
          }}
        />
      </View>
      <Text style={styles.text}>BIENVENIDOS</Text>
      <View style={styles.empresa}>
        <Button 
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.empresa}>
        <Text style={styles.text2}>REGISTRAR</Text>
        <Text style={styles.text1}>Nuevo Usuario</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bienvenido: {
    backgroundColor: 'white',
    height: 160,
    width: 250,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 45,
    color: '#30ded5',
  },
  empresa: {
    textAlign: 'center',
    backgroundColor: 'white',
    height: 55,
    width: 200,
    borderRadius: 30,
    marginLeft: 45,
    marginTop: 40,
  },
  text2: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    marginLeft: -3,
  },
  text1: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginLeft: 4,
    marginTop: 10,
  },
  Logo: {
    width: 250,
    height: 160,
    borderRadius: 19,
  },
});
