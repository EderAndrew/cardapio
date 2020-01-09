import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    flex:1;
    background-color:#FFF;
    height:200px;
    margin:10px;
    border-radius:5px;
    padding:10px;
    flex-direction:row;
`
const ProductImagem = styled.Image`
    width:150px;
    height:80;
`
const Title = styled.Text`
    font-size:22px;
    font-weight:bold;
    color:#FF804A;

`
const ListaProducts = (props) => {
    return(
        <Container>
            <ProductImagem resizeMode='contain'source={props.data.img}/>
            <Title>{ props.data.name }</Title>
        </Container>
    )
}

export default ListaProducts