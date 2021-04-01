import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView, FlatList, TextInput, Container, Text, AreaInput, Input, View } from './styles';

export default function Register() {
  const route = useRoute();
  const bank = route.params.bank;
  const name = bank.name;
  const ispb = bank.ispb;
  const code = bank.code;
  const fullName = bank.fullName;
  const [input, setInput] = useState([])


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
          placeholder="Digite o código do banco"
          placeholderTextColor='#353840'
          value={input}
          anChangeText={(text) => setInput(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Digite a agencia"
          placeholderTextColor='#353840'
          value={input}
          anChangeText={(text) => setInput(text)}
        />
      </AreaInput>
      <AreaInput>
        <Button
          title="Cadastrar"
          color="#be97c6"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </AreaInput>
    </SafeAreaView>
  );
}
