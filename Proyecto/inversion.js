import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
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
    <Image
        style={styles.Logito2}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/584/584093.png',
        }}
      />
    <Text style={styles.text3}>Mis inversiones</Text>
    </View>
    </View>
    <Text style={styles.text2}>¿En que quieres invertir?</Text>
    <View style={styles.objetito1}>
    <View style={styles.inver3}>
    <Image
        style={styles.Logito3}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/854/854952.png',
        }}
      />
    <Text style={styles.text3}>Acciones nacionales</Text>
    </View>
    </View>
    <View style={styles.objetito1}>
    <View style={styles.inver3}>
    <Image
        style={styles.Logito2}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/3549/3549872.png',
        }}
      />
    <Text style={styles.text3}>Acciones internacionales</Text>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
inver:{
  alignItems: 'flex-start',
  },
inver2:{
  flexDirection: 'row',
  justifyContent: 'space-around',
},
inver3:{
  flexDirection: 'row',
  justifyContent: 'space-around',
},
Logito: {
    width: 120,
    height: 120,
    marginRight:20,
  },
text: {
    textAlign: 'center',
    fontSize:30,
    color:'#30ded5',
    marginTop:20,
  },
text1: {
  textAlign: 'center',
  fontSize:30,
  color:'#fff',
  marginLeft:35,
  },
objetito:{
  backgroundColor:'#fff',
    height: 80,
    width:360,
    borderRadius:30,
    marginTop:50,
  },
objetito1:{
  backgroundColor:'#fff',
  height: 80,
  width:360,
  borderRadius:30,
  marginTop:40,
},
text2: {
  textAlign: 'center',
  fontSize:30,
  color:'#fff',
  marginLeft:15,
  marginTop:40,
},
text3: {
  textAlign: 'center',
  fontSize:20,
  color:'#000',
  marginTop:23,
  marginRight:15,
},
Logito2: {
  width: 60,
  height: 60,
  marginLeft:15,
  marginTop:10,
},
Logito3: {
  width: 60,
  height: 60,
  marginLeft:5,
  marginTop:10,
},
  });
