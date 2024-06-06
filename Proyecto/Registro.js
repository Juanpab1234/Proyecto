import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableHighlight, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Registro({ navigation }) {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [pais, setPais] = useState('');
  const [fechanacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegister = () => {
    if (!cedula || !nombre || !apellido || !pais || !fechanacimiento || !correo || !contrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    axios.post('http://10.1.0.23:30000/api/register', {
      cedula,
      nombre,
      apellido,
      pais,
      fechanacimiento,
      correo,
      contrasena
    })
    .then(response => {
      Alert.alert('Registro Exitoso', response.data.message);
      navigation.navigate('Login');
    })
    .catch(error => {
      Alert.alert('Error', 'No se pudo registrar el usuario');
      console.error(error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>BIENVENIDOS 🤗</Text>
      <Text style={styles.text1}>Por favor ingrese su información</Text>
      
      <View style={styles.separacion}>
        <Text style={styles.text2}>Cedula</Text>
        <TextInput 
          style={styles.datos}
          placeholder=""
          value={cedula}
          onChangeText={setCedula}
        />
      </View>

      <View style={styles.separacion}>
        <Text style={styles.text2}>Nombre</Text>
        <TextInput 
          style={styles.datos}
          placeholder=""
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      
      <View style={styles.separacion}>
        <Text style={styles.text3}>Apellido</Text>
        <TextInput 
          style={styles.datos}
          placeholder=""
          value={apellido}
          onChangeText={setApellido}
        />
      </View>
      
      <View style={styles.separacion}>
        <Text style={styles.text3}>Pais</Text>
        <TextInput 
          style={styles.datos1}
          placeholder=""
          value={pais}
          onChangeText={setPais}
        />
      </View>
      
      <View style={styles.separacion}>
        <Text style={styles.text3}>Fecha nacimiento</Text>
        <TextInput 
          style={styles.datos2}
          placeholder="AAAA/MM/DD"
          value={fechanacimiento}
          onChangeText={setFechaNacimiento}
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.separacion}>
        <Text style={styles.text3}>Correo</Text>
        <TextInput 
          style={styles.datos}
          placeholder=""
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.separacion}>
        <Text style={styles.text3}>Contraseña</Text>
        <TextInput 
          style={styles.datos3}
          placeholder=""
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />
      </View>
      
      <View style={styles.separacion}>
      <TouchableHighlight
  style={styles.boton1}
  underlayColor="#d3d3d3"
  onPress={() => {
    handleRegister();
    navigation.navigate('Login');
  }}
>
  <Text style={styles.text4}>Registrar</Text>
</TouchableHighlight>
        
        <TouchableHighlight
          style={styles.boton2}
          underlayColor="#d3d3d3"
          onPress={() => navigation.navigate('Principal')}
        >
          <Text style={styles.text4}>Volver</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 50,
    color: '#30ded5',
  },
  text1: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  separacion: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  datos: {
    backgroundColor: 'white',
    height: 35,
    width: 210,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginLeft: 90,
  },
  text2: {
    fontSize: 20,
    color: '#fff',
  },
  text3: {
    fontSize: 20,
    color: '#fff',
  },
  boton1: {
    backgroundColor: '#30ded5',
    height: 45,
    width: 130,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  boton2: {
    backgroundColor: '#30ded5',
    height: 40,
    width: 130,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 50,
  },
  text4: {
    fontSize: 20,
    color: '#fff',
  },
  datos1: {
    backgroundColor: 'white',
    height: 35,
    width: 210,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginLeft: 120,
  },
  datos2: {
    backgroundColor: 'white',
    height: 35,
    width: 210,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  text5: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 15,
  },
  datos3: {
    backgroundColor: 'white',
    height: 35,
    width: 210,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginLeft: 50,
  },
});