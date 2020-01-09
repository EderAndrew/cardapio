import React from 'react'
import styled from 'styled-components/native'
//Importando duas funções. Uma para resetar o histórico e outro para enviar pra próxima tela
import { StackActions, NavigationActions } from 'react-navigation'

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`
const Header = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`
const Title = styled.Text`
    font-size:30px;
    font-weight:bold;
    color:#FF804A;
    margin-bottom:20px;
`
const Banner = styled.Image`
    width:280px;
    height:280px;

`
const Subtitle = styled.Text`
    font-size:16px;
    margin-top:20px;
    color:#FF804A;
`
const Enter = styled.TouchableHighlight`
    width:70%;
    height:50px;
    border:1px solid #FF804A;
    background-color:#FF804A;
    justify-content:center;
    align-items:center;
    margin-bottom:60px;
    border-radius:25px;
`
const TextEnter = styled.Text`
    font-size:16px;
    color:#FFF;
`
const Index = (props) => {
    const acessar = () => {
        //Resetando o histórico
        const resetAction = StackActions.reset({
            index:0,//Resetando
            //Enviando
            actions:[
                //Enviando para a próxima tela
                NavigationActions.navigate({routeName:'MainTab'})
            ]
        })
        
        props.navigation.dispatch(resetAction)
    }

    return(
        <Container>
            <Header>
                <Title>App Cardápio</Title>
                <Banner source={require('../imgs/food.png')}/>
                <Subtitle>Comidas deliciosas</Subtitle>
            </Header>
            <Enter onPress={acessar}>
                <TextEnter>Entrar</TextEnter>
            </Enter>
        </Container>
    )
}
Index.navigationOptions = () => {
    return{
        headerShown:false
    }
}

export default Index;