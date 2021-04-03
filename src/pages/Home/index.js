import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Button, AsyncStorage } from 'react-native';
import { Container, ButtonPost, ListPosts, SafeAreaView, Text, AreaInput, FlatList } from './styles';
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

  const [namee, setNamee] = useState('');
  const [ispbb, setIspbb] = useState('');
  const [codee, setCodee] = useState('');
  const [fullNamee, setFullNamee] = useState('');
  const [contaa, setContaa] = useState('');
  const [agenciaa, setAgenciaa] = useState('');
  const [loading, setLoading] = useState(false);

  function navigateToRegister() {
    navigation.navigate('List')
  }

  useEffect(() => {
    pegaDados()
  }, []);

  async function pegaDados() {

    AsyncStorage.getItem("@MySuperStore:key").then((value) => {
      const usuario = JSON.parse(value);
      // this.setState({ usuario });
      // // const usuario = value;
      setAgenciaa(usuario.agencia)
      console.log(agenciaa);
      // if (!!this.state.usuario) {
      //   this.props.navigation.navigate("Home");
      // } else {
      //   this.props.navigation.navigate("Login");
      // }
    });
  }

  return (
    !loading ? <SafeAreaView>
      <AreaInput>
        <Button
          title="Cadastrar"
          color="#be97c6"
          onPress={() => navigateToRegister()}
        />
      </AreaInput>
      <FlatList

        // data={value}
        // keyExtractor={(banks) => banks.name}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ }) => (
          <Container>
            <View >
              <Text  >{namee}</Text>
              <Text  >{ispbb}</Text>
              <Text >{codee}</Text>
              <Text >{fullNamee}</Text>
            </View>
          </Container>
        )}
      />
      {/* <Container >
        <View >
          <Text  >{name}</Text>
          <Text  >{ispb}</Text>
          <Text >{code}</Text>
          <Text >{fullName}</Text>
          <Text >{conta}</Text>
          <Text >{agencia}</Text>
        </View>
      </Container > */}

    </SafeAreaView> :
      <Container>
        <View >
          <Text  >Carregando</Text>
        </View>
      </Container>

  )
}
