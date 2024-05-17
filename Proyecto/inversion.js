import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Inversion({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inver2}>
        <Image
          style={styles.Logito}
          source={{
            uri: 'https://live.staticflickr.com/65535/53649348379_4271064c62_n.jpg',
          }}
        />
        <View style={styles.inver}>
          <Text style={styles.text}>BIENVENIDO</Text>
          <Text style={styles.text1}>Usuario</Text>
        </View>
      </View>
      <View style={styles.objetito}>
        <View style={styles.inver3}>
        <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Misinver')}
        >
          <View style={styles.buttonContent}>
            <Image
              style={styles.Logito2}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/9030/9030761.png',
              }}
            />
            <Text style={styles.text3}>Mis inversiones</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
      <Text style={styles.text2}>¿En que quieres invertir?</Text>
      <View style={styles.objetito1}>
        <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Invnac')}
        >
          <View style={styles.buttonContent}>
            <Image
              style={styles.Logito3}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/854/854952.png',
              }}
            />
            <Text style={styles.text4}>Acciones nacionales</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.objetito1}>
        <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Invinter')}
        >
          <View style={styles.buttonContent}>
            <Image
              style={styles.Logito4}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/3549/3549872.png',
              }}
            />
            <Text style={styles.text5}>Acciones internacionales</Text>
          </View>
        </TouchableHighlight>
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
  inver: {
    alignItems: 'flex-start',
  },
  inver2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inver3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Logito: {
    width: 120,
    height: 120,
    marginRight: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#30ded5',
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    marginLeft: 35,
  },
  objetito: {
    backgroundColor: '#fff',
    height: 80,
    width: 360,
    borderRadius: 30,
    marginTop: 50,
    justifyContent: 'center',
  },
  objetito1: {
    backgroundColor: '#fff',
    height: 80,
    width: 360,
    borderRadius: 30,
    marginTop: 40,
    justifyContent: 'center',
  },
  text2: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    marginLeft: 15,
    marginTop: 40,
  },
  text3: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
    marginRight: 30,
  },
  Logito2: {
    width: 60,
    height: 60,
    marginBottom: 7,
    marginRight: 70,
  },
  Logito3: {
    width: 60,
    height: 60,
    marginLeft: 35,
    marginBottom: 10,
  },
  Logito4: {
    width: 60,
    height: 60,
    marginLeft: 55,
    marginBottom: 7,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  empresa: {
    backgroundColor: 'white',
    height: 60,
    width: 300,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text4: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft: 50,
    marginBottom:5,
  },
  text5: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft: 35,
    marginBottom: 5,
  },
});
