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
const Contato = () => {
    return(
        <Container>
            <Title>Página Contato</Title>
        </Container>
    )
}

Contato.navigationOptions = () =>{
    return{ 
        tabBarLabel:'Contato',
        tabBarOptions:{
            activeTintColor:'#FF804A'
        },
        tabBarIcon:({focused, tintColor})=>{
            if(focused) {
                return(
                    <ImageTab source={require('../imgs/contact_orange.png')}/>
                )
            }
            return(
                <ImageTab source={require('../imgs/contact_black.png')}/>
            )
            
        },
        
    }
}

export default Contato