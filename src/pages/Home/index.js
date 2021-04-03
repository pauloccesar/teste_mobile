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
      setNamee(usuario.name)
      setIspbb(usuario.ispb)
      setCodee(usuario.code)
      setFullNamee(usuario.fullName)
      setContaa(usuario.conta)
      setAgenciaa(usuario.agencia)
      console.log(agenciaa);

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
      <View>
        <FlatList
          data={[
            { key: namee },
            { key: ispbb },
            { key: codee },
            { key: fullNamee },
            { key: contaa },
            { key: agenciaa },
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </SafeAreaView> :
      <Container>
        <View >
          <Text  >Carregando</Text>
        </View>
      </Container>

  )
}
