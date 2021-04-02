import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Button } from 'react-native';
import { Container, ButtonPost, ListPosts, SafeAreaView, Text } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const route = useRoute();
  const name = "name";
  const ispb = "ispb";
  const code = "code";
  const fullName = "fullName";
  const [posts, setPosts] = useState([
    { id: '1', nome: 'Matheus' },
    { id: '2', nome: 'Jose' },
    { id: '3', nome: 'Lucas' },

  ]);

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('List')
  }

  return (
    <SafeAreaView>
      <Button
        title="Cadastrar"
        color="#be97c6"
        onPress={() => navigateToRegister()}
      />
      <Container >
        <View >
          <Text  >{name}</Text>
          <Text  >{ispb}</Text>
          <Text >{code}</Text>
          <Text >{fullName}</Text>
        </View>
      </Container >

    </SafeAreaView>
  )
}
