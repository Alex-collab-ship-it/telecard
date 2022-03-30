import { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import { AppLoader } from '../../components/AppLoader'
import { THEME, toRoubles } from '../../config'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
export const TransferScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isChosen, setIsChosen] = useState(false)
    const [inp, setInp] = useState('')
    const [refreshing, setRefreshing] = useState(false);

    if (refreshing) {
        const f = async () => await wait(1000).then(() => {setRefreshing(false); navigation.navigate('Confirm', { amount: inp }) });
        f()
        return (
            <AppLoader size={'large'} />
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#999',  opacity: modalVisible ? 0.4: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1, backgroundColor: '#ff' }}>
                <View style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 20 }}>Счет или карта зачисления</Text>
                                <TouchableOpacity onPress={() => { setModalVisible(false); }}>
                                    <AntDesign name="close" size={24} color={THEME.GRAY_COLOR} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 13, color: THEME.GRAY_COLOR }}>Карты</Text>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                                    <ImageBackground style={{ width: 44, height: 29 }} source={require('../../../assets/in-app-icons/visa.png')} />
                                </View>

                                <TouchableOpacity onPress={ () => {setIsChosen(true); setModalVisible(false) }} style={{ flex: 1, height: 45 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15 }}>Дебетовая карта</Text>
                                            <Text style={{ fontFamily: 'Inter', fontSize: 15, color: '#000' }}>{THEME.CARD_MONEY} ₽</Text>
                                        </View>
                                        <Text style={{ marginTop: 5,color: THEME.GRAY_COLOR }}>• 1334</Text> 
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <View style={{ width: '100%' }}>
                        <View style={{ flexDirection: 'column', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3 }}>
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
                                <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={11} color="black" />
                            </View>
                        </View>
                        <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 10 }}>Счет или карта зачисления</Text>
                        { isChosen ?  (
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3, }}>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                                            <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                                                <ImageBackground style={{ width: 44, height: 29 }} source={require('../../../assets/in-app-icons/visa.png')} />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '' }}>
                                                    <Text style={{ fontSize: 15 }}>Дебетовая карта</Text>
                                                    <Text style={{ fontFamily: 'Inter', fontSize: 15, color: '#000' }}>{THEME.CARD_MONEY} ₽</Text>
                                                </View>
                                                <Text style={{ marginTop: 2 ,color: THEME.BORDER_COLOR, fontWeight: 'bold' }}>  {THEME.CARD}</Text> 
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={ () => { setModalVisible(true) }}>
                                            <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={11} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13, fontWeight: '600', marginVertical: 14 }}>Сумма</Text>

                                    <TextInput value={inp} style={{  fontSize: 18, paddingVertical: 6, borderBottomColor: THEME.BORDER_COLOR, 
                                        borderBottomWidth: 0.3, marginBottom: 10 }} onChange={({ nativeEvent: {text} }) => setInp(toRoubles(text))}
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
                            </View>
                        ) : (
                            <TouchableOpacity onPress={ () => { setModalVisible(true) }} activeOpacity={1}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,  }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
                                        <View style={{ width: 40, height: 40, backgroundColor: THEME.MENU_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                            <Ionicons name="ios-card-outline" size={24} color="black" />
                                        </View>
                                        <Text style={{ fontSize: 16, marginLeft: 20 }}>Выберите карту или счет</Text>
                                    </View>
                                    <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={11} color="black" />
                                </View>
                            </TouchableOpacity>
                        )}
                        
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }} disabled={inp === ''} onPress={setRefreshing}>
                        <View style={{ opacity: inp === '' ? 0.5 : 1, backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                            <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Продолжить</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: THEME.WIDTH,
        backgroundColor: '#fff',
        marginTop: THEME.HEIGHT*0.6,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        padding: 20,
    }
}) 