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
    ScrollView,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default class Lop10Component extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            dataList: [
                {
                    name: 'Toán'
                },
                {
                    name: 'Lý'
                },
                {
                    name: 'Hóa'
                },
                {
                    name: 'Sinh'
                },
                {
                    name: 'Anh'
                },
                {
                    name: 'Văn'
                }
            ]
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
                                    this.props.navigation.navigate('Home');                                    
                                }
                            }
                        >

                            <Icon name={'chevron-left'} size={30} color={'#FFF'} style={{ marginLeft: 10, marginVertical: 15 }}></Icon>
                        </TouchableOpacity>
                        <Text style={styles.headerContainerTxt}>Tài liệu ôn thi</Text>
                    </View>
                    <ImageBackground source={require('../../assets/images/studybackground-2.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={[styles.bodyContainer]}>
                            <FlatList
                                data={this.state.dataList}
                                renderItem={
                                    ({ item }) => {
                                        return (
                                            <LinearGradient
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }}
                                                colors={['#ffe2d7', '#ff4700']}
                                                style={[styles.bodyContainerList]}
                                            >
                                                <View style={[styles.bodyContainerList]}>
                                                    <Text style={{
                                                        fontSize: 16,
                                                        fontWeight: 'bold'
                                                    }}>{item.name}</Text>
                                                </View>
                                            </LinearGradient>
                                        );
                                    }
                                }
                                numColumns={2}
                                horizontal={false}
                                keyExtractor={(item,index)=> index}

                            />
                        </View>
                    </ImageBackground>
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
        fontWeight:'bold',
        alignSelf: 'center',
        marginHorizontal: 20
    },
    bodyContainer: {
        alignItems: 'center',
        marginTop: 100
    },
    bodyContainertxt: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'utm-helve',
        marginHorizontal: 15,
        width: 380
    },
    bodyContainerList: {
        width: 110,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 40,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})