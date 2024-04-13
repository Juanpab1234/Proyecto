import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function invnac() {
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
    <Text style={styles.text2}>LOGIN</Text>
    <Text style={styles.text1}>Iniciar</Text>
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
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bienvenido:{
    backgroundColor:'white',
    height: 160,
    width:250,
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10,
  },
  text: {
    textAlign: 'center',
    fontSize:45,
    color:'#30ded5',
  },

empresa:{
  textAlign: 'center',
  backgroundColor:'white',
    height: 55,
    width:200,
    borderRadius:30,
    marginLeft: 45,
    marginTop:40,
},
text2: {
  tectAling: 'center',
  fontSize:25,
  color:'#000',
  marginLeft: 35,
  },
text1: {
  textAlign: 'center',
  fontSize:20,
  color:'gray',
  marginLeft:30,
},
text3: {
  textAlign: 'center',
  fontSize:20,
  color:'gray',
  marginLeft:30,
},
Logo: {
  width: 250,
  height: 160,
  borderRadius:19,
},
  });