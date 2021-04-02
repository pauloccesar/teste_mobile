import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Button } from 'react-native';
import { Container, ButtonPost, ListPosts, SafeAreaView, Text, AreaInput } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const route = useRoute();
  const name = "name";
  const ispb = "ispb";
  const code = "code";
  const fullName = "fullName";
  const conta = "conta";
  const agencia = "agencia";
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('List')
  }

  return (
    <SafeAreaView>
      <AreaInput>
        <Button
          title="Cadastrar"
          color="#be97c6"
          onPress={() => navigateToRegister()}
        />
      </AreaInput>
      <Container >
        <View >
          <Text  >{name}</Text>
          <Text  >{ispb}</Text>
          <Text >{code}</Text>
          <Text >{fullName}</Text>
          <Text >{conta}</Text>
          <Text >{agencia}</Text>
        </View>
      </Container >

    </SafeAreaView>
  )
}
