import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container } from './styles';

const Header = () => {
  return (<Container>
    <Text style={{
      paddingTop: 50,
      paddingBottom: 15,
      textAlign: 'center',
      color: '#3f2454',
      fontSize: 28
    }} >Abas</Text>
  </Container>
  );
}

export default Header;