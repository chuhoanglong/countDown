import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';

export default class ReadingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mode: 'date',
            show: false,
        };
    }
    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
        AsyncStorage.getItem('setup').then(
            res => {
                let getState = JSON.parse(res);
                AsyncStorage.setItem(
                    'setup',
                    JSON.stringify(
                        {
                            ...getState,
                            year: this.state.date.getFullYear(),
                            month: this.state.date.getMonth(),
                            day: this.state.date.getDate()
                        }
                    )
                )
            }
        )
        this.props.convertDate(this.state.date.getFullYear(),this.state.date.getMonth(),this.state.date.getDate());
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }
    render() {
        const { show, date, mode } = this.state;
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
                        <Text style={styles.headerContainerTxt}>Cài đặt giao diện</Text>
                    </View>
                    <View>
                        <ImageBackground source={require('../assets/images/settingsBg.jpg')} style={{ width: '100%', height: '100%' }}>
                            <TouchableNativeFeedback
                                onPress={
                                    () => {
                                        Alert.alert('HELLO')
                                    }
                                }
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['rgba(251,78,47,0.4)', 'rgba(251,78,47,0.5)', 'rgba(251,78,47,0.6)', 'rgba(251,78,47,0.9)']}
                                    style={[styles.bodyEditTitle]}
                                >
                                    <Text style={{ flex: 1, opacity: 0.8, alignSelf: 'center', fontFamily: 'UVNDaLat_R', fontWeight: 'bold', marginLeft: 10 }}>Sửa tiêu đề</Text>
                                    <Icon name={'sort-down'} size={30} style={{ alignSelf: 'flex-end', marginBottom: 3, marginRight: 8, opacity: 0.7, }}></Icon>
                                </LinearGradient>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={
                                    this.datepicker
                                }
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['rgba(251,78,47,0.4)', 'rgba(251,78,47,0.5)', 'rgba(251,78,47,0.6)', 'rgba(251,78,47,0.9)']}
                                    style={[styles.bodyEditTitle]}
                                >
                                    <Text style={{ flex: 1, opacity: 0.8, alignSelf: 'center', fontFamily: 'UVNDaLat_R', fontWeight: 'bold', marginLeft: 10 }}>Chọn ngày</Text>
                                    <Icon name={'calendar'} size={20} style={{ alignSelf: 'flex-end', marginBottom: 3, marginRight: 8, opacity: 0.7, }}></Icon>
                                </LinearGradient>
                            </TouchableNativeFeedback>
                            {show &&
                                <DateTimePicker value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.setDate} />
                            }
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
    bodyEditTitle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'transparent',
        width: 170,
        height: 30,
        borderRadius: 5,
        marginLeft: 25,
        marginVertical: 30,

    }
})