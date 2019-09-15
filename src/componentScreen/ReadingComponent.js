import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import SwiperFlatList from 'react-native-swiper-flatlist';
const { width, height } = Dimensions.get('window');
export default class ReadingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    txt: 'sadk  sadk as dsaj dsagd d sadsagdsakdsh sa sa dsad sdsa sa',
                    src: '../assets/images/lan-nhi.jpg'
                },
                {
                    txt: 'sadk  sadk as dsaj dsagd d sadsagdsakdsh sa sa dsad sdsa sa',
                    src: '../assets/images/teacher.jpg'
                }
            ],
            a: 'sdsds'
        }
    }
    render() {
        return (
            <View styles={{ flex: 1 }}>
                <ImageBackground source={this.props.navigation.getParam('bg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    this.props.navigation.goBack();
                                }
                            }
                        >

                            <Icon name={'chevron-left'} size={30} color={'#FFF'} style={{ marginLeft: 10, marginVertical: 15 }}></Icon>
                        </TouchableOpacity>
                        <Text style={styles.headerContainerTxt}>Đọc để truyền động lực</Text>
                    </View>
                    <ScrollView>
                        <View>

                            <SwiperFlatList
                                index={0}
                                showPagination={true}
                                paginationDefaultColor={'gray'}
                                paginationActiveColor={'rgba(9,80,143,0.8)'}
                                paginationStyleItem={{ marginHorizontal: 5, height: 8, width: 8 }}
                            >
                                <View style={styles.bodyContainer}>
                                    <View>

                                        <Text style={[styles.bodyContainertxt, { fontSize: 16, fontFamily: 'utm-helve', fontWeight: 'bold'}]}>Hệ Thống bài học:</Text>
                                        <Text style={[styles.bodyContainertxt]}>	Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.</Text>
                                    </View>
                                    <Image source={require('../assets/images/lan-nhi.jpg')} style={{ width: 300, height: 300, alignSelf: 'center', marginVertical: 10 }}></Image>
                                    <Text style={[styles.bodyContainertxt, { fontSize: 16, fontFamily: 'utm-helve', fontWeight: 'bold' }]}>Xác đinh mục tiêu:</Text>
                                    <Text style={[styles.bodyContainertxt]}>	Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.</Text>
                                </View>
                                <View style={styles.bodyContainer}>
                                    <Text style={[styles.bodyContainertxt, { fontSize: 16, fontFamily: 'utm-helve', fontWeight: 'bold' }]}>Hệ Thống bài học:</Text>
                                    <Text style={[styles.bodyContainertxt,]}>	Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.</Text>
                                    <Image source={require('../assets/images/teacher.jpg')} style={{ width: 300, height: 300, alignSelf: 'center', marginVertical: 10 }}></Image>
                                    <Text style={[styles.bodyContainertxt, { fontSize: 16, fontFamily: 'utm-helve', fontWeight: 'bold' }]}>Xác đinh mục tiêu:</Text>
                                    <Text style={[styles.bodyContainertxt,]}>	Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.Specifies how the header should be rendered: float (render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.), screen (each screen has a header attached to it and the header fades in and out together with the screen.</Text>
                                </View>
                            </SwiperFlatList>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
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
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal: 20
    },
    bodyContainer: {
        marginVertical: 10,
        marginBottom: 40,
        width: width,
    },
    bodyContainertxt: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'utm-helve',
        marginHorizontal: 15,
        width:width-50
    }
})