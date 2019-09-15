import React, { Component } from 'react';
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
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Countdown from 'react-native-countdown-component';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage';
import backgroundImg0 from '../assets/images/home-background-0.jpg';
import backgroundImg1 from '../assets/images/home-background-1.jpg';
import backgroundImg2 from '../assets/images/home-background-2.jpg';
import backgroundImg3 from '../assets/images/home-background-3.jpg';
import backgroundImg4 from '../assets/images/home-background-4.jpg';
import backgroundImg5 from '../assets/images/home-background-5.jpg';
import backgroundImg6 from '../assets/images/home-background-6.jpg';
import backgroundImg7 from '../assets/images/home-background-7.jpg';
import arrowcountdown from '../assets/images/arrow-countdown.jpg';
const { width, height } = Dimensions.get('window');
export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBg: 0,
            open: true,
            modalVisible: false,
            year:null,
            month:null,
            day:null
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('setup').then(
            (res) => {
                this.setState({
                    isBg:JSON.parse(res).isBg || 0,
                    year: JSON.parse(res).year || 2020,
                    month: JSON.parse(res).month || 5,
                    day: JSON.parse(res).day || 31
                });
            }
        )
        SplashScreen.hide();
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    switchBg(stateBg) {
        switch (stateBg) {
            case 0: return backgroundImg0;
            case 1: return backgroundImg1;
            case 2: return backgroundImg2;
            case 3: return backgroundImg3;
            case 4: return backgroundImg4;
            case 5: return backgroundImg5;
            case 6: return backgroundImg6;
            case 7: return backgroundImg7;
            default:
                return backgroundImg0;
        }
    }
    getTimeCountDown() {
        let timeCurrent = new Date();
        let timeFuture = new Date(this.props.date.year, this.props.date.month, this.props.date.day);
        timeCountDown = (timeFuture - timeCurrent) / 1000;
        return timeCountDown;
    }
    getDayCountDown() {
        let timeCurrent = new Date();
        let timeFuture = new Date(this.props.date.year, this.props.date.month, this.props.date.day);
        let dayCountDown = Math.floor((timeFuture - timeCurrent) / (24 * 60 * 60) / 1000);
        return dayCountDown;
    }
    render() {

        return (
            <View style={{ flex: 1, fontFamily: 'MotionControl-Bold' }}>
                <ImageBackground source={this.switchBg(this.state.isBg)} style={{ flex: 1, width: '100%', height: '100%' }}>
                    <TouchableOpacity
                        style={[styles.iconsSwap, { zIndex: 1, }]}
                        onPress={
                            () => {
                                let isBg;
                                if (this.state.isBg < 7) {
                                    isBg = this.state.isBg + 1;
                                    this.setState({
                                        isBg
                                    });
                                } else {
                                    this.setState({
                                        isBg: 0
                                    });
                                }
                                AsyncStorage.setItem('setup', JSON.stringify({ ...this.state, isBg }))
                            }
                        }
                    >
                        <View>
                            <Icons name={'md-swap'} size={25} color={'#FFF'}></Icons>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.container]}>
                        <Text style={[styles.title]}>Ngày Thi THPT Quốc Gia</Text>
                        <Text style={[styles.title, { fontSize: 30, marginTop: 0 }]}>{this.props.date.day}-{this.props.date.month + 1}-{this.props.date.year}</Text>
                    </View>
                    <View style={[styles.swrapArrowcountdown]}>
                        <Text numberOfLines={2} style={styles.tetxTitleArrowcountdown}>Thời gian chuẩn bị trước khi thi</Text>
                        <Image source={arrowcountdown} style={[styles.arrowcountdown]} />
                        <Text style={styles.tetxArrowcountdown}>{this.getDayCountDown()}</Text>
                        <Text style={[styles.tetxArrowcountdown, { fontSize: 14, marginTop: 0, fontFamily: 'utm-helve' }]}>Ngày nữa</Text>
                    </View>
                    {
                        this.state.open &&
                        <View style={{ flex: 1, height: '100%' }}>
                            <View style={styles.TimeArrowcountdown}>
                                <Countdown
                                    until={this.getTimeCountDown()}
                                    size={10}
                                    timeLabels={{ m: null, s: null }}
                                    showSeparator
                                    separatorStyle={{ color: '#FFF', }}
                                    digitStyle={{
                                        backgroundColor: 'transparent',
                                    }}
                                    digitTxtStyle={{
                                        color: '#FFF',
                                        fontSize: 20,
                                    }}
                                    timeToShow={['H', 'M', 'S']}
                                    style={{
                                        height: 26,
                                        backgroundColor: 'rgba(255, 255, 255, 0.35)',
                                        borderRadius: 25,
                                    }}
                                />
                            </View>
                            <Text style={styles.noteText}>Mọi sự cố gắng của bạn sẽ được thể hiện trong bài thi. Cố Gắng Lên. Chúc Bạn May mắn!</Text>
                            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
                                <TouchableNativeFeedback
                                    onPress={
                                        () => {
                                            this.setState({
                                                modalVisible: !this.state.modalVisible
                                            })
                                        }
                                    }
                                >

                                    <View style={styles.MenuArrowcountup}>
                                        <Icon name={'angle-double-up'} size={35} color={'white'}> </Icon>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    }

                </ImageBackground >

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onShow={
                        () => {
                            this.setState({
                                open: !this.state.open
                            });
                        }
                    }
                >
                    <ScrollView>
                        <View style={[styles.modalContainer]}>

                            <TouchableNativeFeedback
                                onPress={
                                    () => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.setState({
                                            open: !this.state.open
                                        });
                                    }
                                }
                            >
                                <View style={styles.MenuArrowcountdown}>
                                    <Icon name={'angle-double-down'} size={35} color={'#FFF'} style={{ marginTop: 4 }}></Icon>
                                </View>
                            </TouchableNativeFeedback>

                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['rgba(255,255,255,0)', 'rgba(19,134,255,0.2)', 'rgba(19,134,255,0.9)', 'rgba(0,89,170,1)']}
                                style={[styles.modalContainerMenu]}
                            >

                                <View style={{ alignItems: 'flex-start' }}>

                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.Reading({ bg: this.switchBg(this.state.isBg) });
                                                this.props.navigation.navigate('Reading', { bg: this.switchBg(this.state.isBg) })
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 30, height: 43 }}
                                                source={require('../assets/images/icons/reading.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Đoc để truyền động lực</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.NhatKi({ bg: this.switchBg(this.state.isBg) });
                                                this.props.navigation.navigate('NhatKi', {
                                                    bg: this.switchBg(this.state.isBg)
                                                });
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 40, height: 40 }}
                                                source={require('../assets/images/icons/dairy.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Nhật kí quyêt tâm thi</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.TaiLieu({ bg: this.switchBg(this.state.isBg) });
                                                this.props.navigation.navigate('TaiLieu', {
                                                    bg: this.switchBg(this.state.isBg)
                                                });
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 30, height: 40 }}
                                                source={require('../assets/images/icons/data.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Tài Liệu ôn thi</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.Reading();
                                                this.props.navigation.navigate('Reading', {
                                                    bg: this.switchBg(this.state.isBg)
                                                });
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 25, height: 45, alignSelf: 'center' }}
                                                source={require('../assets/images/icons/fanpage.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Fanpage học tập</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.Reading();
                                                this.props.navigation.navigate('Reading', {
                                                    bg: this.switchBg(this.state.isBg)
                                                });
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 42, height: 33 }}
                                                source={require('../assets/images/icons/youtube.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Youtube học tập</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback
                                        onPress={
                                            () => {
                                                // Actions.Setting({ bg: this.switchBg(this.state.isBg) });
                                                this.props.navigation.navigate('Setting', {
                                                    bg: this.switchBg(this.state.isBg)
                                                });
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.setState({
                                                    open: !this.state.open
                                                });
                                            }
                                        }
                                    >
                                        <View style={[styles.menuContainer]}>
                                            <Image
                                                style={{ width: 50, height: 50 }}
                                                source={require('../assets/images/icons/setting.jpg')}
                                            />
                                            <Text style={styles.txtMenu}>Cài đặt giao diện</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </Modal>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        fontFamily: 'MatthanSans-Regular'
    },
    title: {
        color: '#FFF',
        fontSize: 27,
        // fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        fontFamily: 'utm-helve'
    },
    iconsSwap: {
        borderColor: '#FFF',
        width: 32,
        height: 30,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 7,
        marginTop: 7
    },
    arrowcountdown: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 60,
        position: 'absolute'
    },

    swrapArrowcountdown: {
        position: 'relative'
    },
    tetxArrowcountdown: {
        fontSize: 50,
        // fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center',
        marginTop: 115,
        fontFamily: 'MotionControl-Bold'

    },
    tetxTitleArrowcountdown: {
        position: 'absolute',
        color: '#FFF',
        width: 110,
        fontSize: 13,
        fontFamily: 'utm-helve',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 95,
        marginLeft: 85,
    },
    TimeArrowcountdown: {
        flex: 1,
        width: 120,
        marginTop: 50,
        marginLeft: width/2+30
    },
    noteText: {
        color: '#FFF',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 60,
        width: width-100,
        fontFamily: 'utm-helve',

    },
    MenuArrowcountup: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        width: width,

    },
    MenuArrowcountdown: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        height: 45,
        alignItems: 'center',
    },
    modalContainer: {
        marginTop: height / 2,
        height: '100%',

    },
    modalContainerMenu: {
        height: '100%',
        alignItems: 'flex-start',
        marginLeft: 15
    },
    menuContainer: {
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 5
    },
    txtMenu: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'utm-helve',
        alignSelf: 'center',
        marginHorizontal: 8
    }
})

