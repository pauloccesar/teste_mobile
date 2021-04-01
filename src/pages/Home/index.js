import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Container, ButtonPost, ListPosts } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

export default function Home() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([
    { id: '1', nome: 'Matheus' },
    { id: '2', nome: 'Jose' },
    { id: '3', nome: 'Lucas' },
  ]);
  return (
    <Container>
      <Header />

      <ListPosts
        data={posts}
        renderItem={(item) => (
          <Text>TESTE</Text>,
          <Text>TESTE</Text>,
          <Text>TESTE</Text>,
          <Text>TESTE</Text>
        )}
      />

      <ButtonPost onPress={navigation.navigate('List')}>
        <Feather
          name="edit-2"
          color="#FFF"
          size={25}
        />
      </ButtonPost>
    </Container>

  )
}
