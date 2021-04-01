import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { Container, AreaInput, Input } from './src/pages/Search/style';
const Search = () => {
  return (
    <Container1>
      <AreaInput>
        <Feather
          name="search"
          color="#e52246"
          size={20}
        />
        <Input
          placeholder="Digite o código do banco"
          placeholderTextColor='#353840'
          value={input}
          anChangeText={(text) => setInput(text)}
        />
      </AreaInput>
    </Container1>
  )
}
