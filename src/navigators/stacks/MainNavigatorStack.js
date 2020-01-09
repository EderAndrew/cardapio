import { createStackNavigator } from 'react-navigation-stack'

import Index from '../../screens/Index'
import MainTab from '../tabs/MainTab'

const MainNavigatorStack = createStackNavigator({
    //Carregando as páginas
    Index,
    MainTab
},{
    defaultNavigationOptions:{
        headerShown:false
    }
})

 
export default MainNavigatorStack
