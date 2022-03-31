import { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { AppLoader } from '../../../components/AppLoader';
import { THEME } from '../../../config';

const wait = timeout => {
    return new Promise(resolve => {setTimeout(resolve, timeout)});
}

export const TypeScreen = ({ navigation, route }) => {
    const [refreshing, setRefreshing] = useState(true);
    const { phone, amount } = route.params
    if (refreshing) {
        const f = async () => await wait(600).then(() => {setRefreshing(false);});
        f()
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <AppLoader size={'large'} />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15 }}>
            <View style={{ flexDirection: 'column', width: '100%' }}>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontFamily: 'InterRegular' }}>Получатель</Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 }}>
                    <Text style={{ fontSize: 16 }}>{phone}</Text>
                    <AntDesign name="checkcircleo" size={18} color="#90B6A8" />
                </View>
                <View style={{ borderStyle: 'dotted', borderRadius: 1, borderWidth: 1, borderColor: THEME.BORDER_COLOR }} />

                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontFamily: 'InterRegular', marginTop: 20, }}>Способ перевода</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3 }}>
                    <View style={{ height: 38, width: 38, backgroundColor: THEME.MENU_COLOR, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground style={{ width: 35, height: 35 }} source={require('../../../../assets/in-app-icons/sbplogo.png')} />
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'InterRegular' }}>Система быстрых платежей</Text>
                </View>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontFamily: 'InterRegular', marginTop: 15, }}>Укажите банк получателя</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 38, width: 38, justifyContent: 'center', alignItems: 'center' }}>
                            <ImageBackground style={{ width: 35, height: 35 }} source={require('../../../../assets/in-app-icons/tinkoff.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                            <Text style={{ fontSize: 15, fontFamily: 'InterRegular' }}>Тинькофф Банк</Text>
                            <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontFamily: 'InterRegular', }}>Комиссия 0 ₽</Text>
                        </View>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={22} color={THEME.GRAY_COLOR} />
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }} onPress={() => navigation.navigate('CardConfirm', { phone, amount })}>
                <View style={{ backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                    <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Далее</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}