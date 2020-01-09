import { createAppContainer } from 'react-navigation'

//Importando o MainNavigator
import MainNavigatorStack from './src/navigators/stacks/MainNavigatorStack'

export default createAppContainer(MainNavigatorStack)