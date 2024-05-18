import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Matpago({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.text}>INGRESE SU MÉTODO DE PAGO</Text>
    <Text style={styles.text1}>Ingrese su tarjeta débito/crédito</Text>
    <View style={styles.separacion}>
    <Text style={styles.text2}>N° tarjeta</Text>
    <View style={styles.daticos}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>N° titular</Text>
    <View style={styles.daticos1}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Cc</Text>
    <View style={styles.daticos2}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Cv</Text>
    <View style={styles.daticos2}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Fv</Text>
    <View style={styles.daticos2}></View>
    </View>
    <View style={styles.separacion}>
    <Text style={styles.text3}>Cuotas</Text>
    <View style={styles.daticos3}></View>
    </View>
    <View style={styles.separacion}>
    <View>
    <TouchableHighlight
          style={styles.botoncitos}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Misinver')}
        >
          <View>
            <Text style={styles.text4}>Agregar</Text>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.botoncitos1}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Misinver')}
        >
          <View>
            <Text style={styles.text4}>Volver</Text>
          </View>
        </TouchableHighlight>
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
    fontSize:30,
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
daticos:{
  backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginTop:50,
    marginLeft:15,
  },
  text2: {
    marginTop:50,
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
  },
  daticos1:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:15,
    marginTop:15,
  },
  text3: {
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
    marginTop:15,
    },
  daticos2:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:70,
    marginTop:15,
  },
  daticos3:{
    backgroundColor:'white',
    height: 35,
    width:250,
    borderRadius:30,
    marginLeft:30,
    marginTop:15,
  },
  botoncitos:{
    backgroundColor:'#30ded5',
    height: 40,
    width:130,
    borderRadius:30,
    marginTop:50,

  },
  botoncitos1:{
    backgroundColor:'#30ded5',
    height: 40,
    width:130,
    borderRadius:30,
    marginTop:50,
    marginLeft:50,
  },
  text4: {
    textAlign: 'center',
    fontSize:20,
    color:'black',
    marginTop:5,
    },
  });
