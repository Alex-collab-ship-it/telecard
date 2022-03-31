import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Fontisto, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { THEME, toOparationFormat, toRoubles } from '../config'
import { load } from '../store/actions/transactionActions';
import { AppLoader } from '../components/AppLoader';

const wait = timeout => {
    return new Promise(resolve => {setTimeout(resolve, timeout)});
}
export const CardScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load('card'))
    }, [dispatch])

    const card = useSelector(state => state.operations.card)
    const loading = useSelector(state => state.operations.card.loading)

    if (loading || loading === undefined ) {
        return (
          <AppLoader size={'large'} />
        )
    }
    

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ width: THEME.WIDTH, padding: 25, backgroundColor: THEME.MENU_COLOR }} >
                <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                    <ImageBackground style={{ height: 130, width: 195, padding: 12, flexDirection: 'column', justifyContent: 'space-between' }}
                        source={require('../../assets/in-app-icons/bigvisa.png')} >
                        <View style={{ width: '100%' }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#fff', fontSize: 11, fontWeight: '300' }}>Дебетовая карта</Text>
                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: '700' }}>{THEME.CARD}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5, }} >
                                <Text style={{ fontSize: 22, color: '#fff', fontFamily: 'Inter'}}>{toRoubles(card.balance).replace(' ₽', '')}</Text>
                                <Text style={{ fontSize: 22, color: THEME.GRAY_COLOR, fontFamily: 'Inter'}}> ₽</Text>
                            </View>
                        </View>
                        <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontWeight: '700' }}>05/24</Text>
                    </ImageBackground>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <View style={styles.actionWrapper}>
                        <View style={styles.actions}>
                            <AntDesign name="plus" size={26} color="black"/>
                        </View>
                        <Text style={{ color: 'black', fontSize: 13, marginTop: 12 }}>Пополнить</Text>
                    </View>
                    <View style={styles.actionWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate('Choose')}>
                            <View style={styles.actions}>
                                <Fontisto name="arrow-swap" size={20} color="black" style={{ opacity: 1 }} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 13, marginTop: 12 }}>Перевести</Text>
                    </View>
                    <View style={styles.actionWrapper}>
                        <View style={styles.actions}>
                            <Feather name="arrow-up-right" size={28} color="black" />
                        </View>
                        <Text style={{ color: 'black', fontSize: 13, marginTop: 12 }}>Оплатить</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'column'  }}>
                <View style={styles.wrapper}>
                    <View style={{ width: '18%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="ios-information-circle-outline" size={30} color="black" />
                    </View>
                    <View style={[styles.titlesWrapper, {borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3}]}>
                        <Text style={{ fontSize: 15, fontFamily: 'InterRegular' }}>Реквизиты</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <View style={{ width: '18%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <ImageBackground style={{ width: 45, height: 45}} source={require('../../assets/in-app-icons/sale.png')} />
                    </View>
                    <View style={styles.titlesWrapper}>
                        <Text style={{ fontSize: 15, fontFamily: 'InterRegular' }}>Кэшбэк от партнеров</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, marginTop: 20, flexDirection: 'column' }}>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontFamily: 'InterRegular' }}>Недавние операции</Text>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontFamily: 'InterRegular',marginVertical: 20 }}>Сегодня</Text>
                <FlatList data={card.transactions.slice(0,3)} renderItem={({ item }) => <Transaction item={item}/>}
                    ItemSeparatorComponent={() => (<View style={{ width: '100%', height: 0.5, backgroundColor: THEME.BORDER_COLOR, marginVertical: 8 }} />)} />
            </View>
        </View>
    )
}

function Transaction({ item }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'column', alignContent: 'space-between', }}>
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontFamily: 'InterRegular' }}>{item.type}</Text>
            </View>
            { item.amount.includes('-') ? 
                <Text style={{ fontFamily: 'Inter' }}>{toOparationFormat(item.amount)}</Text>
            : <Text style={{ fontFamily: 'InterBold', color: THEME.MAIN_COLOR }}>{toOparationFormat(item.amount)}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    titlesWrapper: {
        flexDirection: 'row',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    wrapper: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 80
    },
    actions: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})