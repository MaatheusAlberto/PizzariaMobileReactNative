import React, { useState, useContext } from 'react';

import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn(){

  const { signIn, loadingAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  async function handleLogin(){
    if(email === '' || password === ''){
      return
    }

    await signIn({email, password})

  }

  return(
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Text style={styles.textPizza}>Pizzari</Text>
          <View style={{justifyContent: 'center'}}>
            <Image 
              source={require('../../assets/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Digite seu email'
          style={styles.input}
          placeholderTextColor="#f0f0f0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder='Digite sua senha'
          style={styles.input}
          placeholderTextColor="#f0f0f0"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loadingAuth 
          ? <ActivityIndicator size={25} color="#FFF" />
          : <Text style={styles.buttonText}>Acessar</Text>
          }
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e'
  },
  containerImage:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  textPizza:{
    fontSize: 50,
    color: '#ffff',
    fontWeight: '600',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 35, 
    height: 35,
    marginTop:10
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#fff'
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
})