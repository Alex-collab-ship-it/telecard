import { View, Text, TouchableOpacity, ScrollView,
    StyleSheet, ImageBackground, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { loadBalance } from '../../../store/actions/transactionActions'
import { THEME, formatMobileNumber, onlyDigits, toRoubles } from '../../../config'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppLoader } from '../../../components/AppLoader';
import { TextInput } from 'react-native-gesture-handler';



export const CardTransfer = ({ navigation }) => {
    const [inp, setInp] = useState('')
    const [PhNumber,setPhNumber] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBalance())
    }, [dispatch])

    const balance = useSelector(state => state.operations.balance)

    if (balance.loading) {
        return (
          <AppLoader size={'large'} />
        )
    }

    const handler = (text) => {
        let formatedNo = formatMobileNumber(onlyDigits(text.replace('+7','')));
        setPhNumber(formatedNo);
    };
    


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1, backgroundColor: '#456' }}>
                <View style={{ flex: 1, height: '100%', backgroundColor: '#fff', justifyContent: 'space-between',paddingHorizontal: 15, }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <View style={[styles.type, { borderColor: THEME.MAIN_COLOR, borderWidth: 2 }]}>
                                <View style={{ flexDirection: 'column', alignItems: 'center',
                                    justifyContent: 'space-between' }}>
                                    <Ionicons name="ios-call-outline" size={24} color="black" />
                                    <Text style={styles.typeText}>По телефону</Text>
                                </View>
                            </View>
                            <View style={styles.type}>
                                <View style={{ flexDirection: 'column', alignItems: 'center',
                                    justifyContent: 'space-between' }}>
                                    <Ionicons name="ios-card-outline" size={24} color="black" />
                                    <Text style={styles.typeText}>На карту</Text>
                                </View>
                            </View>
                            <View style={styles.type}>
                                <View style={{ flexDirection: 'column', alignItems: 'center',
                                    justifyContent: 'space-between' }}>
                                    <ImageBackground style={{ width: 22, height: 22 }} source={require('../../../../assets/in-app-icons/document.png')}/>
                                    <Text style={styles.typeText}>На карту</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'column', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3 }}>
                                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginBottom: 10 }}>Откуда списывать деньги</Text>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                                        <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                                            <ImageBackground style={{ width: 44, height: 29 }} source={require('../../../../assets/in-app-icons/visa.png')} />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '' }}>
                                                <Text style={{ fontSize: 15 }}>Дебетовая карта</Text>
                                                <Text style={{ fontFamily: 'Inter', fontSize: 15, color: '#000' }}>{balance.card} ₽</Text>
                                            </View>
                                            <Text style={{ marginTop: 2 ,color: THEME.BORDER_COLOR, fontWeight: 'bold' }}>  {THEME.CARD}</Text> 
                                        </View>
                                    </View>
                                    <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={11} color="black" />
                                </View>
                                <View style={{ height: 0.5, width: '100%', backgroundColor: THEME.BORDER_COLOR, marginTop: 5 }} />
                            </View>
                        </View>
                        <Text style={{ fontSize: 13, color: THEME.GRAY_COLOR }} >Получатель</Text>
                        <View style={{ position: 'relative', marginTop: 10 }}>
                            <TextInput onChangeText={handler} keyboardType='phone-pad' onEndEditing={() => { if (PhNumber.length <= 4 ) {setPhNumber('')}}}
                                style={styles.textInput} placeholder='Получатель' value={PhNumber} />
                            <MaterialCommunityIcons style={{ position: 'absolute', right: 10, top: 10 }} name="account-circle-outline" size={24} color={THEME.GRAY_COLOR} />
                        </View>
                        <Text style={{ fontSize: 13, color: THEME.GRAY_COLOR, marginTop: 25, marginBottom: 5 }} >Сообщение получателю</Text>
                        <TextInput style={styles.textInput} placeholder='Сообщение'/>

                        <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 14 }}>Сумма</Text>
                        <TextInput value={inp} style={{  fontSize: 18, paddingVertical: 6, borderBottomColor: THEME.BORDER_COLOR, 
                            borderBottomWidth: 0.3, marginBottom: 10 }} onChange={({ nativeEvent: {text} }) => setInp(toRoubles(text))}
                            onEndEditing={() => { if (inp.length === 4 ) {setInp('')}}}
                            placeholder='₽' keyboardType='number-pad' />

                        <View style={{  flexDirection: 'row', }}>
                            <TouchableOpacity on activeOpacity={1} onPress={() => setInp(toRoubles((Number(inp.replace(/\s/g, '').replace('₽', '')) + 100).toString()))} 
                                style={{ height: 38, width: 90, backgroundColor: THEME.MENU_COLOR,
                                alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: 8 }}>
                                <Text style={{ fontFamily: 'Inter' }}>+ 100 ₽</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => setInp(toRoubles((Number(inp.replace(/\s/g, '').replace('₽', '')) + 500).toString()))}
                                style={{ height: 38, width: 90, backgroundColor: THEME.MENU_COLOR,
                                alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: 8 }}>
                                <Text style={{ fontFamily: 'Inter' }}>+ 500 ₽</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => setInp(toRoubles((Number(inp.replace(/\s/g, '').replace('₽', '')) + 1000).toString()))}
                                style={{ height: 38, width: 90, backgroundColor: THEME.MENU_COLOR,
                                alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: 8 }}>
                                <Text style={{ fontFamily: 'Inter' }}>+ 1000 ₽</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{ width: '100%', marginBottom: 20 }} disabled={inp === '' || onlyDigits(PhNumber).length !== 11}
                        onPress={() => navigation.navigate('TypeScreen', { phone: PhNumber, amount: inp })}>
                        <View style={{ opacity: inp === '' || onlyDigits(PhNumber).length !== 11 ? 0.5 : 1, backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                            <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Продолжить</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    type: {
        width: 115,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: THEME.BORDER_COLOR,
        borderWidth: 0.7,
        borderRadius: 14,
        marginRight: 10
    },
    typeText: {
        fontSize: 12,
        fontFamily: 'InterRegular',
        marginTop: 10
    },
    textInput: {
        width: '100%', height: 40, paddingVertical: 5, borderBottomColor: THEME.BORDER_COLOR,
        borderBottomWidth: 0.5, justifyContent: 'flex-end', fontSize: 16, fontFamily: 'InterRegular'
    }
})