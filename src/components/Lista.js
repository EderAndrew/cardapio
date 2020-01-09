import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableHighlight`
    flex:1;
    height:180px;
    width:360px;
    background-color:${props=>props.bg};
    justify-content:center;
    margin:20px;
    border-radius:10px;
    
`
const View = styled.View`
flex-direction:row;
`
const Image = styled.Image`
    width:70px;
    height:70px;
    margin-left:20px;
`
const TextTitle = styled.Text`
    font-size:22px;
    font-weight:bold;
    color:#FFF;
    margin-bottom:10px;
`
const Text = styled.Text`
    font-size:16px;
    color:#FFF;
`
const Area = styled.View`
    margin-left:20px;
`
const Lista = (props) => {
    const clicou = () => {
        props.navigation.navigate('HomeProducts', {
            title:props.data.title, 
            products:props.data.products
        })
    }
    return(
        <Container bg={props.data.bg} underlayColor='#CCC' onPress={clicou}>
            <View>
                <Image source={props.data.img}/>
                <Area>
                    <TextTitle>{ props.data.title }</TextTitle>
                    <Text>{ props.data.description }</Text>
                </Area>
            </View>
        </Container>
    )

}

export default Lista