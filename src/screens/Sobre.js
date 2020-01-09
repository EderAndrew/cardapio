import React from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    flex:1;
`
const Title = styled.Text`
    font-size:30px;
`
const ImageTab = styled.Image`
    width:26;
    height:26;
`
const Sobre = () => {
    return(
        <Container>
            <Title>Página Sobre</Title>
        </Container>
    )
}

Sobre.navigationOptions = () =>{
    return{ 
        tabBarLabel:'Sobre',
        tabBarOptions:{
            activeTintColor:'#FF804A'
        },
        tabBarIcon:({focused, tintColor})=>{
            if(focused) {
                return(
                    <ImageTab source={require('../imgs/question_orange.png')}/>
                )
            }
            return(
                <ImageTab source={require('../imgs/question_black.png')}/>
            )
            
        },
        
    }
}

export default Sobre