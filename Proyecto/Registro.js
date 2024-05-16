import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.text}>BIENVENIDOS 🤗</Text>
    <Text style={styles.text1}>Por Favor Ingrese Su Información</Text>
    <View style={styles.separacion}>
    <Text style={styles.text2}>Nombre</Text>
    <View style={styles.datos}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Apellido</Text>
    <View style={styles.datos1}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Pais</Text>
    <View style={styles.datos2}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Edad</Text>
    <View style={styles.datos2}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Correo</Text>
    <View style={styles.datos3}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Contraseña</Text>
    <View style={styles.datos4}></View>
    </View>
    <View style={styles.separacion}>
    <View style={styles.boton1}>
    <Text style={styles.text4}>Registrar</Text>
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
    fontSize:50,
    color:'#30ded5',
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
  datos1:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:39,
    marginTop:15,
  },
  text3: {
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
    marginTop:15,
    },
  datos2:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:62,
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
  text4: {
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
    marginTop:5,
    },
  });