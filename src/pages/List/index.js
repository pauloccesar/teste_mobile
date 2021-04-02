import React, { useEffect, useState, Component } from 'react';
import { SafeAreaView, View, styles, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import Constants from 'expo-constants';
import { FlatList, TextInput, Container, Text, AreaInput, Input, Container1 } from './styles';
import { SearchBar } from 'react-native-elements';



export default function List() {
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [banks, setBanks] = useState([])
  const [input, setInput] = useState([])

  const searchAction = (text) => {
    const newData = data.filter(item => {
      const itemData = `${item.code.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;

    });
    this.setState({
      data: newData,
      search: text
    });
  }

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
            value={input}
            onChangeText={text => this.searchAction(text)}
            keyboardType='numeric'
          // onPress={(input) => this.setState({ searchKey: input })}
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

