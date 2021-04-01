import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, styles, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import { FlatList, TextInput, Container, Text, AreaInput, Input, Container1 } from './styles';



export default function List() {
  // const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [banks, setBanks] = useState([])
  const [input, setInput] = useState([])



  useEffect(() => {
    fetch('https://brasilapi.com.br/api/banks/v1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setBanks(data)
        // console.log(data)
      })
  }, [])
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.code
          ? item.code.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const navigation = useNavigation();

  function navigateToRegister(bank) {
    navigation.navigate('Register', { bank })
  }


  return (
    <SafeAreaView>
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
          // value={input}
          // anChangeText={(text) => setInput(text)}
          />
        </AreaInput>
      </Container1>
      <FlatList

        data={banks}
        keyExtractor={(banks) => banks.name}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item: bank }) => (
          <TouchableOpacity onPress={() => navigateToRegister(bank)}>
            <Container>
              <View >
                <Text  >{bank.name}</Text>
                <Text  >{bank.ispb}</Text>
                <Text >{bank.code}</Text>
                <Text >{bank.fullName}</Text>
              </View>
            </Container>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView >
  )
}



function BanksShow(item) {
  const { ispb, name, code, fullName } = item.item;


  return (
    <TouchableOpacity onPress={() => { }}>
      <Container>
        <View >
          <Text  >Teste</Text>
        </View>
      </Container>
    </TouchableOpacity >
  )


}

