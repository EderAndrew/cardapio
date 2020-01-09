import { createStackNavigator } from 'react-navigation-stack'

import HomeList from '../../screens/HomeList'
import HomeProducts from '../../screens/HomeProducts'

const HomeTab = createStackNavigator({
    HomeList,
    HomeProducts
})

export default HomeTab
