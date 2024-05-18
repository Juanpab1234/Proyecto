import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function Invinter({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.banderita1}>
    <Image
        style={styles.Logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/9030/9030761.png',
        }}
      />
    </View>
    <Text style={styles.text}>Mis inversiones</Text>
    <View style={styles.busfil}>
    <View style={styles.buscar}>
    <View style={styles.inver2}>
    <Image
        style={styles.Lupa}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/1280/1280594.png',
        }}
      />
    <Text style={styles.text1}>Buscar</Text>
    </View>
    </View>
    <View style={styles.filtro}>
    <Image
        style={styles.filtrito}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/876/876195.png',
        }}
      />
    </View>
    </View>
    <View>
    <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Apple')}
        >
          <View style={styles.inver2}>
            <Image
              style={styles.Logito}
              source={{
                uri: 'https://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg',
              }}
            />
            <View style={styles.inver}>
            <Text style={styles.text2}>Apple Inc.</Text>
            <Text style={styles.text3}>AAPL</Text>
            </View> 
            <View style={styles.inver}>
            <Text style={styles.text4}>$665.200,0</Text>
            <Text style={styles.text5}>$0,0(0,0%)</Text>
            </View>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Amazon')}
        >
          <View style={styles.inver2}>
            <Image
              style={styles.Logito}
              source={{
                uri: 'https://th.bing.com/th/id/R.1bc571434e81e728d77811f886004f8e?rik=HPB5dxcBue9o%2bQ&pid=ImgRaw&r=0',
              }}
            />
            <View style={styles.inver}>
              <Text style={styles.text2}>Amazon Inc.</Text>
              <Text style={styles.text3}>AMZN</Text>
            </View>
            <View style={styles.inver}>
              <Text style={styles.text4}>$720.520,0</Text>
              <Text style={styles.text5}>$0,0(0,0%)</Text>
            </View>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Ecopetrol')}
        >
          <View style={styles.inver2}>
            <Image
              style={styles.Logito}
              source={{
                uri: 'https://thumbor.forbes.com/thumbor/416x416/filters:format(jpg)/https://i.forbesimg.com/media/lists/companies/ecopetrol_416x416.jpg',
              }}
            />
            <View style={styles.inver}>
              <Text style={styles.text2}>Ecopetrol</Text>
              <Text style={styles.text3}>ECOPETROL</Text>
            </View>
            <View style={styles.inver}>
              <Text style={styles.text4}>$2.260,0</Text>
              <Text style={styles.text5}>$0,0(0,0%)</Text>
            </View>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.empresa}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Bancolombia')}
        >
          <View style={styles.inver2}>
            <Image
              style={styles.Logito}
              source={{
                uri: 'https://vignette.wikia.nocookie.net/logopedia/images/9/94/Bancolombia_symbol_2006.png/revision/latest/scale-to-width-down/592?cb=20170817191519',
              }}
            />
          <View style={styles.inver}>
            <Text style={styles.text2}>Bancolombia</Text>
            <Text style={styles.text3}>PFBCOLOM</Text>
          </View>
            <View style={styles.inver}>
              <Text style={styles.text4}>$34.340,0</Text>
              <Text style={styles.text5}>$0,0(0,0%)</Text>
            </View>
          </View>
        </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
          style={styles.boton}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Inversion')}
        >
          <View>
            <Text style={styles.text6}>Volver</Text>
          </View>
        </TouchableHighlight>
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
  banderita1:{
    backgroundColor:'white',
    height: 160,
    width:160,
    justifyContent:'center',
    borderRadius:90,
    marginBottom:10,
  },
  text: {
    textAlign: 'center',
    fontSize:30,
    color:'#30ded5',
  },
buscar:{
  backgroundColor:'white',
    height: 35,
    width:325,
    borderRadius:30,
    marginTop:30,
  },
filtro:{
  backgroundColor:'white',
  height: 40,
  width:40,
  borderRadius:15,
  marginTop:30,
},
busfil:{
  width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
},
empresa:{
  backgroundColor:'white',
    height: 55,
    width:390,
    borderRadius:30,
    marginTop:20,
},
text1: {
  textAlign: 'center',
  fontSize:20,
  color:'gray',
  marginTop:2,
  marginRight:200,
  },
text2: {
  textAlign: 'left',
  fontSize:18,
  color:'#000',
  marginLeft:30,
  },
text3: {
  textAlign: 'left',
  fontSize:18,
  color:'gray',
  marginLeft:30,
  },
text4: {
  textAlign: 'right',
  fontSize:18,
  color:'#000',
  marginLeft:50,
  },
text5: {
  textAlign: 'right',
  alignSelf:'flex-end',
  fontSize:18,
  color:'#000',
  marginRight:25,
  },
inver:{
  flex: 1,
  alignItems: 'flex-start',
},
inver2:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
Logo: {
  width: 160,
  height: 160,
  backgroundColor: 'black',
},
filtrito: {
  width: 40,
  height: 40,
},
Lupa: {
  width: 32,
  height: 32,
  marginLeft:10,
},
Logito: {
  width: 50,
  height: 40,
  marginLeft:20,
  marginTop:5,
},
Logito1: {
  width: 30,
  height: 30,
  marginLeft:20,
  marginTop:5,
},
boton:{
  backgroundColor:'#30ded5',
  height: 40,
  width:145,
  borderRadius:30,
  marginTop:20,
},
text6: {
  textAlign: 'center',
  fontSize:20,
  color:'black',
  marginTop:5,
  },
  });
