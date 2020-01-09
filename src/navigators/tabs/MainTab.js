import React from 'react'
import styled from 'styled-components/native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeTab from '../tabs/HomeTab'
import Contato from '../../screens/Contato'
import Horario from '../../screens/Horario'
import Sobre from '../../screens/Sobre'

const ImageTab = styled.Image`
    width:26;
    height:26;
`
const MainTab = createBottomTabNavigator({
    HomeTab:{
        screen:HomeTab,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarOptions:{
                activeTintColor:'#FF804A'
            },
            tabBarIcon:({focused, tintColor})=>{
                if(focused) {
                    return(
                        <ImageTab source={require('../../imgs/home_orange.png')}/>
                    )
                }
                return(
                    <ImageTab source={require('../../imgs/home_black.png')}/>
                )
                
            }
        }
    },
    Contato,
    Horario,
    Sobre

})

export default MainTab