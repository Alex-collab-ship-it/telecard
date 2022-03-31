import { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useDispatch } from 'react-redux';
import { AppLoader } from '../../../components/AppLoader'
import { onlyDigits, THEME } from '../../../config'
import { toCard, toBill } from '../../../store/actions/transactionActions';

const wait = timeout => {
    return new Promise(resolve => {setTimeout(resolve, timeout)});
}
export const CardConfirm = ({ route, navigation }) => {
    const [refreshing, setRefreshing] = useState(true);
    const [isChecked, setChecked] = useState(true);
    const dispatch = useDispatch()
    const { amount, phone } = route.params
    const transactionHandler = () => {
        dispatch(toCard({
            title: 'PEREVOD NA SCHET',
            type: 'Денежный перевод - снятие',
            amount: '-'+onlyDigits(amount)
        }))
        // let d = new Date()
        // dispatch(toBill({
        //     type: 'Пополнение',
        //     date: d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear(),
        //     amount: onlyDigits(amount)
        // }))
        navigation.navigate('CardSuccess')
    }

    if (refreshing) {
        const f = async () => await wait(1000).then(() => {setRefreshing(false);});
        f()
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <AppLoader size={'large'} />
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 20, paddingVertical: 15, }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter' }}>Проверьте данные</Text>
            <View style={{ flexDirection: 'column', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3, marginTop: 40 }}>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600',  }}>Откуда списывать деньги</Text>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 10  }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                            <ImageBackground style={{ width: 44, height: 29 }} source={require('../../../../assets/in-app-icons/visa.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '' }}>
                            <Text style={{ fontSize: 15 }}>Дебетовая карта</Text>
                            <Text style={{ fontFamily: 'InterRegular', fontSize: 13, color: THEME.GRAY_COLOR }}>{THEME.CARD}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 10 }}>Счет или карта зачисления</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingVertical: 7 }}>
                <Text style={{ width: '75%', fontSize: 15 }}>Переводы через Систему быстрых платежей</Text>
                <View style={{ height: 38, width: 38, backgroundColor: THEME.MENU_COLOR, borderRadius: 19, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground style={{ width: 35, height: 35 }} source={require('../../../../assets/in-app-icons/sbplogo.png')} />
                </View>
            </View>
            <View style={{ borderStyle: 'dotted', borderRadius: 1, borderWidth: 1, borderColor: THEME.BORDER_COLOR }} />
            <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginBottom: 10, marginTop: 25 }}>Банк получателя</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingBottom: 7, alignItems: 'center' }}>
                <Text style={{ width: '75%', fontSize: 15 }}>Тинькофф Банк</Text>
                <ImageBackground style={{ width: 38, height: 38 }} source={require('../../../../assets/in-app-icons/tinkoff.png')} />
            </View>
            <View style={{ borderStyle: 'dotted', borderRadius: 1, borderWidth: 1, borderColor: THEME.BORDER_COLOR }} />

            <View style={{ marginTop: 20, width: '100%', backgroundColor: THEME.MENU_COLOR, borderRadius: 12, padding: 15 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Inter' }}>Сумма списания</Text>
                    <Text style={{ fontFamily: 'Inter' }}>{ amount }</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: 'Inter' }}>Комиссия</Text>
                    <Text style={{ fontFamily: 'Inter' }}>0 ₽</Text>
                </View>
                <View style={{ borderStyle: 'dotted', borderRadius: 1, borderWidth: 1, borderColor: THEME.BORDER_COLOR, marginVertical: 10}} />
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: 'InterBold' }}>Итого</Text>
                    <Text style={{  fontFamily: 'InterBold' }}>{ amount }</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox style={ { margin: 8, borderRadius: 5 }} value={isChecked} onValueChange={setChecked} color={isChecked ? THEME.MAIN_COLOR : undefined} />
                <Text style={{ color: 'black', fontSize: 12, fontFamily: 'InterRegular' }}>Я согласен с </Text>
                <Text style={{ color: THEME.MAIN_COLOR, fontSize: 12, fontFamily: 'InterRegular' }}>условиями</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }} onPress={transactionHandler} disabled={!isChecked}>
                <View style={{ opacity: isChecked ? 1 : 0.5, backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                    <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Подтвердить</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}