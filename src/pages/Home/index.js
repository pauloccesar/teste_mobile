import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Button, AsyncStorage } from 'react-native';
import { Container, ButtonPost, ListPosts, SafeAreaView, Text, AreaInput, FlatList, Container1 } from './styles';
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function navigateToRegister() {
    navigation.navigate('List')
  }

  useEffect(() => {
    pegaDados()
  }, []);

  async function pegaDados() {

    AsyncStorage.getItem("@MySuperStore:key").then((contas) => {
      const accounts = JSON.parse(contas);
      setData(accounts)

      /*FUNÇÃO PARA APAGAR OS DADOS*/
      /*---------------------------*/
      // AsyncStorage.setItem("@MySuperStore:key", JSON.stringify([]));


    });
  }

  return (
    !loading ? <SafeAreaView>
      <Button
        title="Cadastrar"
        color="#be97c6"
        onPress={() => navigateToRegister()}
      />
      <Container1>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <Container>
                <View >
                  <Text  >{item.name}</Text>
                  <Text  >{item.ispb}</Text>
                  <Text >{item.code}</Text>
                  <Text >{item.fullName}</Text>
                  <Text >{item.agencia}</Text>
                  <Text >{item.conta}</Text>
                </View>
              </Container>
            }
          />
        </View>
      </Container1>
    </SafeAreaView> :
      <Container>
        <View >
          <Text>Não existem dados cadastrados</Text>
        </View>
      </Container>
  )
}
