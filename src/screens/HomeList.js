import React,{ useState } from 'react'
import styled from 'styled-components/native'

import Lista from '../components/Lista'

const Container = styled.SafeAreaView`
    flex:1;
`
const Listagem = styled.FlatList``

const HomeList = (props) => {
    let list = [
        {
            key:'1',
            title:'Prato Executivo',
            img:require('../imgs/tipos/pe.png'),
            description:'Pratos ja prontos para comer',
            bg:'#E35339',
            products:[
                {key:'1',name:'Prato de Frango',img:require('../imgs/cardapio/pe/executivos_frang_.png'), bg:'#E35339'},
                {key:'2',name:'Prato de Peixe',img:require('../imgs/cardapio/pe/executivos_peix_.png'), bg:'#E35339'},
                {key:'3',name:'Prato de Picanha',img:require('../imgs/cardapio/pe/executivos_picanh_.png'), bg:'#E35339'}
            ]
        },
        {
            key:'2',
            title:'Saladas',
            img:require('../imgs/tipos/saladas.png'),
            description:'Saladas leves e saborosas',
            bg:'#A6BB24',
            products:[
                {key:'1',name:'Salada de água doce',img:require('../imgs/cardapio/saladas/salada_aguadoc_.png'), bg:'#A6BB24'},
                {key:'2',name:'Salada de Salmão',img:require('../imgs/cardapio/saladas/salada_salma.png'), bg:'#A6BB24'},
                {key:'3',name:'Salada de frango',img:require('../imgs/cardapio/saladas/salada-fr.png'), bg:'#A6BB24'}
            ]
        },
        {
            key:'3',
            title:'Bebidas',
            img:require('../imgs/tipos/bebidas.png'),
            description:'Bebidas para todos os gostos',
            bg:'#079ED4',
            products:[
                {key:'1',name:'Caipirosca',img:require('../imgs/cardapio/bebidas/capirosc_3.png'), bg:'#079ED4'},
                {key:'2',name:'Cookies Cremoso',img:require('../imgs/cardapio/bebidas/cookies_crea.png'), bg:'#079ED4'},
                {key:'3',name:'Morango GD',img:require('../imgs/cardapio/bebidas/morango_gd.png'), bg:'#079ED4'},
                {key:'4',name:'Prata',img:require('../imgs/cardapio/bebidas/patra.png'), bg:'#079ED4'},
                {key:'5',name:'Suco Fitness',img:require('../imgs/cardapio/bebidas/suco_fitines_gd.png'), bg:'#079ED4'}
            ]
        },
        {
            key:'4',
            title:'Sobremesas',
            img:require('../imgs/tipos/sobremesa.png'),
            description:'Sobremesas deliciosas',
            bg:'#FCB81C',
            products:[
                {key:'1',name:'Brownie',img:require('../imgs/cardapio/sobremesas/brownie_gd.png'), bg:'#FCB81C'},
                {key:'2',name:'Creme Papaya',img:require('../imgs/cardapio/sobremesas/creme_papaya_cassis_gd.png'), bg:'#FCB81C'},
                {key:'3',name:'Morango GD',img:require('../imgs/cardapio/sobremesas/delicia_gelada_gd.png'), bg:'#FCB81C'}
            ]
        }
    ]
    const [comidas, setComidas] = useState(list)
    return(
        <Container>
            <Listagem 
                data={comidas}
                renderItem={({item})=><Lista data={item} navigation={props.navigation}/>}
            />
        </Container>
    )
}

HomeList.navigationOptions = () =>{
    return{
       headerTitle:'Cardápio Restaurante'
    }
}

export default HomeList