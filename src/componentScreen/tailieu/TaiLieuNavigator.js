import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Lop10 from './Lop10';
import Lop11 from './Lop11';
import Lop12 from './Lop12';


const tailieuContainer = createBottomTabNavigator({
    Lop10: {
        screen: Lop10,
        navigationOptions: ({ navigation }) => ({
            title: 'Lớp 10',
            
        })
    },
    Lop11: {
        screen: Lop11,
        navigationOptions: ({ navigation }) => ({
            title: 'Lớp 11',
        })
    },
    Lop12: {
        screen: Lop12,
        navigationOptions: ({ navigation }) => ({
            title: 'Lớp 12',
        })
    }
})

export default createAppContainer(tailieuContainer);