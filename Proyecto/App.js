import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function invnac() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.banderita1}>
    <Image
        style={styles.Logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/855/855003.png',
        }}
      />
    </View>
    <Text style={styles.text}>Nacional</Text>
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
    <View style={styles.empresa}>
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
    </View>
    <View style={styles.empresa}>
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
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <Image
        style={styles.Logito}
        source={{
          uri: 'https://www.semana.com/resizer/Ce3_KbGUL8yfnd8asyc1nsokXig=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BPHBZXF7DBFUTERR3NEH6FLCJA.jpeg',
        }}
      />
    <View style={styles.inver}>
    <Text style={styles.text2}>Grupo Nutresa</Text>
    <Text style={styles.text3}>NUTRESA</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$40.740,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <Image
        style={styles.Logito}
        source={{
          uri: 'https://www.imambiental.com/wp-content/uploads/2021/02/argos-01-1170x653.png',
        }}
      />
    <View style={styles.inver}>
    <Text style={styles.text2}>Grupo Argos</Text>
    <Text style={styles.text3}>GRUPOARGOS</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$16.400,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <Image
        style={styles.Logito}
        source={{
          uri: 'https://static.pulzo.com/images/20160825093215/nuevo-logo-grupo-aval.jpg',
        }}
      />
    <View style={styles.inver}>
    <Text style={styles.text2}>Grupo Aval</Text>
    <Text style={styles.text3}>GRUPOAVAL</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$470,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
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
  banderita1:{
    backgroundColor:'white',
    height: 130,
    width:130,
    justifyContent:'center',
    borderRadius:20,
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
    width:380,
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
  width: 130,
  height: 130,
  borderRadius:20,
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
  });
