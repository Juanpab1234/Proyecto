import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
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
  <View style={styles.separacion}></View>
    <Text style={styles.text}>INGRESAR </Text>
    <View style={styles.separacion}>
    <Text style={styles.text2}>Correo:     </Text>
    <View style={styles.datos}></View>
    </View>
  
    <View style={styles.separacion}>
    <Text style={styles.text3}>Contraseña: </Text>
    <View style={styles.datos4}></View>
    </View>
    <View style={styles.separacion}>
    <View style={styles.boton1}>
    <Text style={styles.text4}>Iniciar Sesion</Text>
    </View>
    <View style={styles.boton2}>
    <Text style={styles.text4}>Volver</Text>
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
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize:40,
    color:'white',
  },
text1: {
  marginTop:20,
  textAlign: 'center',
  fontSize:20,
  color:'#fff',
  },
separacion:{
  marginTop:10,
  flexDirection: 'row',
  justifyContent: 'space-around',
},
datos:{
  backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginTop:50,
    marginLeft:39,
  },
  text2: {
    marginTop:50,
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
  },
  text3: {
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
    marginTop:15,
    },
  datos3:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:55,
    marginTop:15,
  },
  boton1:{
    backgroundColor:'#30ded5',
    height: 40,
    width:130,
    borderRadius:30,
    marginTop:50,

  },
  boton2:{
    backgroundColor:'#30ded5',
    height: 40,
    width:130,
    borderRadius:30,
    marginTop:50,
    marginLeft:50,
  },
  datos4:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:15,
    marginTop:15,
  },
    Logo: {
      width: 250,
      height: 160,
      borderRadius:19,
    },
    text4: {
        textAlign: 'center',
        fontSize:20,
        color:'black',
        marginTop:5,
        },
  });