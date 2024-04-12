import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function invnac() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.banderita1}></View>
    <Text style={styles.text}>Nacional</Text>
    <View style={styles.busfil}>
    <View style={styles.buscar}>
    <Text style={styles.text1}>Buscar</Text>
    </View>
    <View style={styles.filtro}></View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
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
    height: 160,
    width:250,
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
  height: 35,
  width:45,
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
  },
text2: {
  textAlign: 'left',
  fontSize:18,
  color:'#000',
  marginLeft:70,
  },
text3: {
  textAlign: 'left',
  fontSize:18,
  color:'gray',
  marginLeft:70,
  },
text4: {
  textAlign: 'right',
  fontSize:18,
  color:'#000',
  marginLeft:90,
  },
text5: {
  textAlign: 'right',
  alignSelf:'flex-end',
  fontSize:18,
  color:'#000',
  marginRight:16,
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
  });
