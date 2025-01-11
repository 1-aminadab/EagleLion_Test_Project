import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Typography from '../../component/atom/typography/text.component';
import Button from '../../component/atom/button/button.component';
import { FontSizes, FontWeights } from '../../../domain/enum/theme';
import Header from '../../component/molecule/card/header.component';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <View style={styles.container}>
     <Header title="Register"/>
      <View style={{marginTop: 100, flex: 1}}>
      <TextInput
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
        label="Name"
        mode="flat"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your name"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        theme={{ colors: {  primary: 'black' } }}
      />
  
      <TextInput
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
        label="E-mail"
        mode="flat"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholder="Enter your email"
        theme={{ colors: {  primary: 'black' } }}

      />

      <Typography size={12} align="center" style={[styles.infoText, {display: inputFocus ? 'flex' : 'none'}]}>
        Communications and transaction history from the app will be sent to the verified email address.
      </Typography>

     
      <View style={styles.promoContainer}>
        <Typography size={14} align="center" style={styles.promoText}>
          FREE delivery just for you! 🔥 Use code <Typography weight={FontWeights.Bold}>WELCOME</Typography> and redeem it now!
        </Typography>
      </View>
      </View>
      <Button
        text="Register"
        onPress={() => {
          console.log('Registering:', { name, email });
        }}
        fullWidth
        disabled ={!name && !email}
        style={styles.button}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  infoText: {
    marginBottom: 32,
    color: '#888',
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 50
  },
  promoContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  promoText: {
    color: '#444',
  },
});

export default RegisterScreen;
