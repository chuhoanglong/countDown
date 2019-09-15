import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Alert

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
export default class NhatKiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            isFocus: false
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('txtNhatKi').then(
            (res) => {
                this.setState({
                    txt: res
                });
            }
        )
        .catch(
            (err) => {
                Alert.alert(err);
            }
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={this.props.navigation.getParam('bg')}
                    style={{ width: '100%', height: '100%' }}
                >
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
                        <Text style={styles.headerContainerTxt}>Nhật ký quyết tâm thi</Text>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    Alert.alert(this.state.txt);
                                    AsyncStorage.setItem('txtNhatKi',this.state.txt);

                                }
                            }
                        >
                            <Icon name={'save'} size={30} color={'#FFF'} style={{ marginLeft: 100, marginVertical: 15 }}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ImageBackground
                            source={require('../assets/images/diaryBg.jpg')}
                            style={{ width: '100%', height: '98%' }}
                            resizeMode={'stretch'}
                        >
                            <TextInput
                                style={[styles.txtNhatKi]}
                                value={this.state.txt}
                                onChangeText={
                                    (txt) => {
                                        this.setState({
                                            txt
                                        })
                                    }
                                }
                                multiline
                                autoFocus
                            ></TextInput>
                        </ImageBackground>
                    </View>
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

    },
    bodyContainertxt: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'utm-helve',
        marginHorizontal: 15,
        width: 380
    },
    txtNhatKi: {
        fontSize: 19,
        fontFamily: 'utm-helve',
        marginHorizontal: 20,

    }
})