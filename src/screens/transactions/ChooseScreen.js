import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { THEME } from '../../config';

export const ChooseScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 15 }}>
            <Text style={{ fontFamily: 'InterBold', fontSize: 18, marginBottom: 20, paddingLeft: 10 }}>Выберите перевод</Text>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Ionicons name="ios-call-outline" size={24} color="black" />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>По номеру телефона, карты или счета</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Fontisto name="arrow-swap" size={20} color="black" />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>Между своими счетами</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 25, height: 25 }} source={require('../../../assets/in-app-icons/govno.jpg')} />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>Между своими счетами</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 25, height: 25 }} source={require('../../../assets/in-app-icons/zalupa.jpg')} />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>Между своими счетами</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 40, height: 40 }} source={require('../../../assets/in-app-icons/percent.png')} />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>На кредит</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 40, height: 40 }} source={require('../../../assets/in-app-icons/network.png')} />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>На брокерский счет или ИИС</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 40, height: 40 }} source={require('../../../assets/in-app-icons/person.png')} />
                </View>
                <View style={styles.inner}>
                    <Text style={styles.text}>Юридическому лицу или ИП</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <ImageBackground style={{ width: 40, height: 40 }} source={require('../../../assets/in-app-icons/tower.png')} />
                </View>
                <View style={[styles.inner, { borderBottomWidth: 0 }]}>
                    <Text style={styles.text}>В бюджетную организацию</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: '13%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
        justifyContent: 'center',
        borderBottomColor: THEME.BORDER_COLOR,
        borderBottomWidth: 0.5
    },
    text: {
        width: 230,
        fontFamily: 'InterRegular'
    }
})