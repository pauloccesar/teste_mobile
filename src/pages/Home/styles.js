import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #3f2454;
elevation: 3;
margin: 8px 2%;
border-radius: 8px;
box-shadow: 1px 1px 3px rgba(18,18,18, 0.2);
`;


export const ButtonPost = styled.TouchableOpacity`
background-color: #202225;
width: 60px;
height: 60px;
border-radius: 30px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 6%;
right: 6%;
`;

export const FlatList = styled.FlatList`
background-color: #3f2454;
`;

export const ListPosts = styled.FlatList`
flex:1;
background-color: #f1f1f1;
`;

export const SafeAreaView = styled.View`
background-color: #FFF;
padding-top: 50px;
height: 100%;
`;

export const Text = styled.Text`
font-Size: 18px;
color: #fff;
padding: 2px;
`;

export const AreaInput = styled.View`
/* flex-direction: row; */
margin: 10px;
background-color: #FFF;
align-items: flex-end;
padding: 5px 10px;
border-radius: 5px;
`;

export const Container1 = styled.View`
padding-top: 40px;
`;