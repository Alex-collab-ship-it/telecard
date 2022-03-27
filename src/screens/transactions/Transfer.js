import { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, SlideInDown} from 'react-native-reanimated'
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons'
import { THEME } from '../../theme'

export const TransferScreen = ({ navigation }) => {
    
    const [isChoice, setIsChoice] = useState(false)

    return (
        <View style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'column', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3 }}>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontWeight: '600', marginBottom: 13 }}>Откуда списывать деньги</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
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
                <TouchableOpacity onPress={() => setIsChoice(!isChoice)}>
                    <View style={{ flexDirection: 'column', borderBottomColor: THEME.BORDER_COLOR, borderBottomWidth: 0.3, marginTop: 10 }}>
                        <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12, fontWeight: '600', marginBottom: 13 }}>Счет или карта зачисления</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
                                <View style={{ width: 40, height: 40, backgroundColor: THEME.MENU_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                    <Ionicons name="ios-card-outline" size={24} color="black" />
                                </View>
                                <Text style={{ fontSize: 16, marginLeft: 20 }}>Выберите карту или счет</Text>
                            </View>
                            <SimpleLineIcons name="arrow-down" style={{ marginLeft: 15 }} size={11} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }}>
                <View style={{ opacity: 0.5, backgroundColor: THEME.MAIN_COLOR, width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 12, }} disabled={true}>
                    <Text style={{ color: '#fff', fontFamily: 'Inter' }}>Продолжить</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

// function Picker () {
//     const styles = StyleSheet.create({
//         container: {
//             width: THEME.WIDTH,
//             backgroundColor: '#677'
//         }
//     })
//     return (
//         <Animated.View entering={SlideInDown.duration(500)} style={styles.container}>
//             <Text>dfgjkdopf</Text>
//         </Animated.View>
//     )
// }