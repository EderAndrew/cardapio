import React, { useState } from 'react'
import styled from 'styled-components/native'

import ListaProducts from '../components/ListaProducts'

const Container = styled.SafeAreaView`
    flex:1;
    background-color:#CCC;            
`
const ListaProductos = styled.FlatList``

const HomeProducts = (props) => {
    const [list, setList] = useState(props.navigation.state.params.products)

    return(
        <Container>
            <ListaProductos 
                data={list}
                renderItem={({item})=><ListaProducts data={ item }/>}
            />
        </Container>
    )
}

HomeProducts.navigationOptions = ({navigation}) => ({
   title:navigation.state.params.title
})

export default HomeProducts