import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, AsyncStorage } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { withFormik } from 'formik';
import { SafeAreaView, FlatList, TextInput, Container, Text, AreaInput, Input, View } from './styles';


export default function Register() {
  const route = useRoute();
  const bank = route.params.bank;
  const name = bank.name;
  const ispb = bank.ispb;
  const code = bank.code;
  const fullName = bank.fullName;

  const [conta, setConta] = useState('');
  const [agencia, setAgencia] = useState('');

  async function submit() {
    const formData = {
      'conta': conta,
      'agencia': agencia,
      'name': name,
      'ispb': ispb,
      'code': code,
      'fullName': fullName
    }
    try {
      await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(formData));
      console.log('certo')
    } catch (error) {
      // Error saving data
    }
  }

  return (
    <SafeAreaView>
      <Container >
        <View >
          <Text  >{bank.name}</Text>
          <Text  >{bank.ispb}</Text>
          <Text >{bank.code}</Text>
          <Text >{bank.fullName}</Text>
        </View>
      </Container >
      <AreaInput>
        <Input
          placeholder="Digite a Agencia"
          placeholderTextColor='#353840'
          value={agencia}
          onChangeText={e => setAgencia(e)}
          keyboardType='numeric'
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Digite a Conta"
          placeholderTextColor='#353840'
          value={conta}
          onChangeText={e => setConta(e)}
          keyboardType='numeric'
        />
      </AreaInput>
      <AreaInput>
        <Button
          title="Cadastrar"
          color="#be97c6"
          onPress={submit}
        />
      </AreaInput>
    </SafeAreaView>
  );
}