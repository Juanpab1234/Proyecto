import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function invinter() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.banderita1}></View>
    <Text style={styles.text}>Global</Text>
    <View style={styles.busfil}>
    <View style={styles.buscar}>
    <Text style={styles.text1}>Buscar</Text>
    </View>
    <View style={styles.filtro}></View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <View style={styles.inver}>
    <Text style={styles.text2}>Apple Inc.</Text>
    <Text style={styles.text3}>AAPL</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$665.200,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <View style={styles.inver}>
    <Text style={styles.text2}>Amazon Inc.</Text>
    <Text style={styles.text3}>AMZN</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$720.520,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <View style={styles.inver}>
    <Text style={styles.text2}>Uber</Text>
    <Text style={styles.text3}>UBER</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$281.640,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <View style={styles.inver}>
    <Text style={styles.text2}>Pfizer Inc</Text>
    <Text style={styles.text3}>PFE</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$99.800,0</Text>
    <Text style={styles.text5}>$0,0(0,0%)</Text>
    </View>
    </View>
    </View>
    <View style={styles.empresa}>
    <View style={styles.inver2}>
    <View style={styles.inver}>
    <Text style={styles.text2}>Ford</Text>
    <Text style={styles.text3}>F</Text>
    </View>
    <View style={styles.inver}>
    <Text style={styles.text4}>$49.980,0</Text>
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
