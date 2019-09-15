import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert,
    Modal,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTabBar from './CustomTabBar';
import Lop10Component from './Lop10';
import Lop11Component from './Lop11';
import Lop12Component from './Lop12';

export default class ReadingComponent extends React.Component {
    render() {
        return (
            // <View styles={{ flex: 1 }}>
            //     <ImageBackground source={this.props.navigation.getParam('bg')} style={{ width: '100%', height: '100%' }}>
            //         <View style={styles.headerContainer}>
            //             <TouchableOpacity
            //                 onPress={
            //                     () => {
            //                         Actions.Home()
            //                     }
            //                 }
            //             >

            //                 <Icon name={'chevron-left'} size={30} color={'#FFF'} style={{ marginLeft: 10, marginVertical: 15 }}></Icon>
            //             </TouchableOpacity>
            //             <Text style={styles.headerContainerTxt}>Tài liệu ôn thi</Text>
            //         </View>
            //     </ImageBackground>
            // </View>
            <Router>
                <Tabs
                    key="TaiLieu"
                    tabBarComponent={CustomTabBar}
                    activeBackgroundColor={'blue'}
                    activeTintColor={'red'}
                    inactiveBackgroundColor={'black'}
                >
                    <Scene key="Lớp 10" hideNavBar={true} modal={true} component={Lop10Component}/>
                    <Scene key="Lớp 11" hideNavBar={true} modal={true} component={Lop11Component}/>
                    <Scene key="Lớp 12" hideNavBar={true} modal={true} component={Lop12Component}/>

                </Tabs>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#FFF'
    },
    headerContainerTxt: {
        color: '#FFF',
        fontSize: 19,
        fontFamily: 'utm-helve',
        alignSelf: 'center',
        marginHorizontal: 20
    },
    bodyContainer: {

    },
    bodyContainertxt: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'utm-helve',
        marginHorizontal: 15,
        width: 380
    }
})