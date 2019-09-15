import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeComponent from '../Container/HomeContainer';
import NhatKiComponent from './NhatKiComponent';
import ReadingComponent from './ReadingComponent';
import SettingComponent from '../Container/SettingContainer';
import TaiLieuComponent from './tailieu/TaiLieuNavigator';

const AppStack = createStackNavigator(
    {
        Home: {
            screen: HomeComponent
        },
        NhatKi: {
            screen: NhatKiComponent
        },
        Reading: {
            screen: ReadingComponent
        },
        Setting: {
            screen: SettingComponent
        },
        TaiLieu: {
            screen: TaiLieuComponent
        },

    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);
export default createAppContainer(AppStack);
