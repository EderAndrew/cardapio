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
const Horario = () => {
    return(
        <Container>
            <Title>Página Horários</Title>
        </Container>
    )
}

Horario.navigationOptions = () =>{
    return{ 
        tabBarLabel:'Horario',
        tabBarOptions:{
            activeTintColor:'#FF804A'
        },
        tabBarIcon:({focused, tintColor})=>{
            if(focused) {
                return(
                    <ImageTab source={require('../imgs/time_orange.png')}/>
                )
            }
            return(
                <ImageTab source={require('../imgs/time_black.png')}/>
            )
            
        },
        
    }
}

export default Horario