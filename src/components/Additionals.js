import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native"
import Animated , { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { THEME } from "../config"
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';


export const Additionals = ({ navigation }) => {
    const cardHeight = useSharedValue(0);
    const card = useAnimatedStyle(() => {
        return {
            height: withTiming(cardHeight.value === 0 ?  50 : 0 , {
                duration: 400,
                easing:  Easing.inOut(Easing.in),
                }),
            opacity: cardHeight.value === 0 ? 1 : 0
        }
    });
    const billHeight = useSharedValue(0);
    const bill = useAnimatedStyle(() => {
        return {
            height: withTiming(billHeight.value === 0 ?  70 : 0 , {
                duration: 400,
                easing:  Easing.inOut(Easing.in),
                }),
            opacity: billHeight.value === 0 ? 1 : 0
        }
    });
    
    const [isCredit,setIsCredit] = useState(false)
    const [isPurchase,setIsPurchase] = useState(false)
    const [isInvestments,setIsInvestments] = useState(false)
    return (
        <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 8, marginTop: 10}}>
            <View style={{ width: '100%',  paddingHorizontal: 5, backgroundColor: '#fff', paddingTop: 15,  }}> 

                <TouchableOpacity activeOpacity={1}  onPress={() => { cardHeight.value = cardHeight.value === 0 ? 120 : 0 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 22, paddingLeft: 10, }}>
                        <View style={{  flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.text}>Карты</Text>
                            <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={10} color="black" />
                        </View>
                        <AntDesign name="plus" size={22} color={THEME.MAIN_COLOR} style={{ marginRight: 10 }} />
                    </View> 
                </TouchableOpacity>
                <Animated.View style={[{ flexDirection: 'column', paddingHorizontal: 10,  }, card]}>
                    <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
                        <View style={{ width: '100%', paddingHorizontal: 10, flexDirection: 'row' }}>
                            <View style={{ height: 50, width: THEME.WIDTH*0.1, marginRight: 17, justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 44, height: 29 }} source={require('../../assets/in-app-icons/visa.png')} />
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{ fontSize: 15, }}>Дебетовая карта</Text>
                                    <Text style={{ fontFamily: 'Inter', fontSize: 15, color: '#000' }}>{THEME.CARD_MONEY} ₽</Text>
                                </View>
                                <Text style={{ marginTop: 5,color: THEME.GRAY_COLOR }}>• 1334</Text> 
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={{ width: THEME.WIDTH*0.91, height: 0.9, backgroundColor: THEME.MENU_COLOR, alignSelf: 'center' }}></View>

            <TouchableOpacity activeOpacity={1} onPress={() => setIsCredit(!isCredit)}>
                <View style={[styles.wrapper, { justifyContent: 'flex-start' }]}>
                    <Text style={styles.text}>Кредиты</Text>
                    <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={10} color="black" />
                </View>
            </TouchableOpacity>
            {isCredit ? (
                <Animated.View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 25 , height: 50, marginBottom: 10, alignItems: 'flex-start' }}>
                        <View style={{ width: THEME.WIDTH*0.1, height: THEME.WIDTH*0.1, justifyContent: 'center', alignItems: 'center',
                            marginRight: 10, backgroundColor: '#f0f2ff', borderRadius: 5 }}>
                            <AntDesign name="plus" size={24} color={THEME.MAIN_COLOR} />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 1  }}>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Подайте заявку на кредит за пару</Text>
                                    <Text style={{ fontSize: 16 }}>минут</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            ): <></>}

            <View style={{ width: THEME.WIDTH*0.91, height: 0.9, backgroundColor: THEME.MENU_COLOR, alignSelf: 'center' }}></View>

            <TouchableOpacity activeOpacity={1} onPress={() => setIsPurchase(!isPurchase)}>
                <View style={styles.wrapper}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Text style={styles.text}>Вклады</Text>
                        <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={10} color="black" />
                    </View>
                    <AntDesign name="plus" size={22} color={THEME.MAIN_COLOR} style={{ marginRight: 5 }} />
                </View>
            </TouchableOpacity>

            <View style={{ width: THEME.WIDTH*0.91, height: 0.9, backgroundColor: THEME.MENU_COLOR, alignSelf: 'center' }}></View>

            <TouchableOpacity activeOpacity={1} onPress={() => { billHeight.value = billHeight.value === 0 ? 70 : 0 }}>
                <View style={[styles.wrapper, { paddingBottom: 0}]}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Text style={styles.text}>Счета</Text>
                        <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={10} color="black" />
                    </View>
                    <AntDesign name="plus" size={22} color={THEME.MAIN_COLOR} style={{ marginRight: 5 }} />
                </View>
            </TouchableOpacity>

            <Animated.View style={bill}>
                <TouchableOpacity onPress={() => navigation.navigate('Schet')}>
                    <View style={[styles.wrapper, {marginLeft: 5}]}>
                        <View style={{ width: 40, height: 40, backgroundColor: THEME.MENU_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <ImageBackground style={{ width: 22, height: 22 }} source={require('../../assets/in-app-icons/document.png')}/>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>
                            <View>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: '#000' }}>Управляй процентом</Text>
                                <Text style={{ fontFamily: 'Inter', fontSize: 15, color: "black" }}>{THEME.MONEY} ₽</Text>
                            </View>
                            <Text style={{ color: THEME.GRAY_COLOR, marginRight: 5 }}>• 8476</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>

            <View style={{ width: THEME.WIDTH*0.91, height: 0.9, backgroundColor: THEME.MENU_COLOR, alignSelf: 'center', marginTop: 10 }}></View>

            <TouchableOpacity activeOpacity={1} onPress={() => setIsInvestments(!isInvestments)}>
                <View style={styles.wrapper}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Text style={styles.text}>Инвестиции</Text>
                        <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={10} color="black" />
                    </View>
                    <AntDesign name="plus" size={22} color={THEME.MAIN_COLOR} style={{ marginRight: 5 }} />
                </View>
            </TouchableOpacity>
            
            <View style={{ width: THEME.WIDTH*0.91, height: 0.9, backgroundColor: THEME.MENU_COLOR, alignSelf: 'center' }}></View>

            <View style={{ paddingHorizontal: 15, paddingVertical: 20, flexDirection: 'column', margin: 20, backgroundColor: THEME.MENU_COLOR, borderRadius: 15 }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black'
                }}>Курсы и обмен валюты</Text>
                <Text style={{ color: THEME.GRAY_COLOR, marginVertical: 15 }}>Посмторите все курсы, чтобы выбрать выгодный</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ color: '#000' }}>Валюта</Text>
                    <View style={{  flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                        <Text style={{ color: '#000' }}>Продать</Text>
                        <Text style={{ color: '#000' }}>Купить</Text>
                    </View>
                </View>



                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }} >
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>USD</Text>
                    <View style={{  flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>88,80</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>116,30</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }} >
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>EUR</Text>
                    <View style={{  flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>95,53</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>129,06</Text>
                    </View>
                </View>
                
                <View style={{ marginTop: 20, flex: 1, backgroundColor: THEME.MAIN_COLOR, justifyContent: 'center', alignItems: 'center', borderRadius: 12, paddingVertical: 13 }}>
                    <Text style={{ color: '#fff', fontSize: 17 }}>Посмотреть все курсы</Text>
                </View>
                <View style={{ marginTop: 5, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 13 }}>
                    <Text style={{ color: THEME.MAIN_COLOR, fontSize: 17, fontWeight: 'bold' }}>Открыть счет в валюте</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 8,
        marginTop: 10
    },
    wrapper: {
        width: THEME.WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 15,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18
    }
})
