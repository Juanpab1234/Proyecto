import { Image, ScrollView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.Bienvenido}>
  <Image
      style={styles.Logo}
      source={{
        uri: "https://assist.com.co/wp-content/uploads/2023/04/eco.webp",
      }}
    />
  </View>
  <View style={styles.separacion}></View>
    <Text style={styles.text}>  Ecopetrol.⛽ </Text>
    <Text style={styles.text1}>  $2.260 </Text>
    <View style={styles.separacion}>
    <View style={styles.separacion}>
    </View>
    <Image
      style={styles.Grafica}
      source={{
        uri: "https://live.staticflickr.com/65535/53728190041_8b697a34a9_c.jpg",
      }}
    />
    </View>
  
    <View style={styles.separacion}>
    </View>
    <View style={styles.separacion}>
    <View>
    <TouchableHighlight
          style={styles.boton1}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Matpago')}
        >
          <View>
            <Text style={styles.text4}>Invertir</Text>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.boton2}
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
    marginTop: 5,
    textAlign: 'center',
    fontSize:40,
    color:'white',
  },
text1: {
  marginTop:5,
  textAlign: 'center',
  fontSize:25,
  color:'#fff',
  },
separacion:{
  marginTop:10,
  flexDirection: 'row',
  justifyContent: 'space-around',
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
    Logo: {
        width: 90,
      height: 90,
      borderRadius:170,
      marginTop:10,
    },
    Grafica: {
        width: 380,
        height: 269,
        borderRadius:0,
        marginTop:29,
    },
    text4: {
        textAlign: 'center',
        fontSize:20,
        color:'black',
        marginTop:5,
        },
  });