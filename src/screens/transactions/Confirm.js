import { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { AppLoader } from '../../components/AppLoader'
import { THEME } from '../../config'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

export const Confirm = ({ route, navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    

    if (refreshing) {
        const f = async () => await wait(1000).then(() => {setRefreshing(false); navigation.navigate('Success')});
        f()
        return (
            <AppLoader size={'large'} />
        )
    }
    const { amount } = route.params

    return (
        <View style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between' }}>
           <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginBottom: 13 }}>Откуда списывать деньги</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 53 }}>
                            <View style={{ width: 40, height: 40, backgroundColor: THEME.MENU_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <ImageBackground style={{ width: 22, height: 22 }} source={require('../../../assets/in-app-icons/document.png')}/>
                            </View>
                            <View style={{ height: '100%', flexDirection: 'column' , marginLeft: 18, justifyContent: 'space-between' }} >
                                <Text style={{ fontSize: 16,  }}>Управляй процентом</Text>
                                <Text style={{ fontFamily: 'Inter', fontSize: 16 }}>{THEME.MONEY} ₽</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 10 }}>Счет или карта зачисления</Text>
                <View style={{ flexDirection: 'column',marginBottom: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                                    <ImageBackground style={{ width: 44, height: 29 }} source={require('../../../assets/in-app-icons/visa.png')} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '' }}>
                                        <Text style={{ fontSize: 15 }}>Дебетовая карта</Text>
                                        <Text style={{ fontFamily: 'Inter', fontSize: 15, color: '#000' }}>{THEME.CARD_MONEY} ₽</Text>
                                    </View>
                                    <Text style={{ marginTop: 2,color: THEME.BORDER_COLOR, fontWeight: '700' }}>  {THEME.CARD}</Text> 
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 10 }}>Тип перевода</Text>
                <Text style={{ width: '100%', marginBottom: 10 }}>Между своими счетами</Text>

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

            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }} onPress={setRefreshing}>
                <View style={{ backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                    <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Перевести</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}