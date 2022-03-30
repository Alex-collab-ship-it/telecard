import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { THEME } from "../config";


export const SchetScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }} showsVerticalScrollIndicator={false} overScrollMode="never">
            <View style={{ width: THEME.WIDTH, padding: 25, backgroundColor: THEME.MENU_COLOR }} >
                <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                    <ImageBackground style={{ width: 40, height: 40 }} source={require('../../assets/in-app-icons/white-document.png')}/>
                    <Text style={{ color: "black", fontSize: 18, marginTop: 10 }}>Cчет</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 18, fontFamily: 'Inter' }}>Управляй процентом</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: '#000', fontSize: 30, marginRight: 10, fontFamily: 'Inter',}}>{THEME.MONEY}</Text>
                        <Text style={{ color: THEME.BORDER_COLOR, fontSize: 30, fontWeight: '700'}}>₽</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <View style={styles.actionWrapper}>
                        <View style={styles.actions}>
                            <AntDesign name="plus" size={30} color="black"/>
                        </View>
                        <Text style={{ color: 'black', fontSize: 14, marginTop: 12 }}>Пополнить</Text>
                    </View>
                    <View style={styles.actionWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
                            <View style={styles.actions}>
                                <Fontisto name="arrow-swap" size={20} color="black" style={{ opacity: 1 }} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 14, marginTop: 12 }}>Перевести</Text>
                    </View>
                    <View style={styles.actionWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate('BillInfoScreen')}>
                            <View style={styles.actions}>
                                <AntDesign name="info" size={30} color="black" />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 14, marginTop: 12 }}>О счете</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 25 }}>
                <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 20, fontSize: 13 }}>Сегодня</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 14, marginBottom: 6 }}>Перевод в онлайн сервисе согласно рас...</Text>
                        <Text style={{ color: THEME.GRAY_COLOR, fontSize: 13 }}>Перевод на счет</Text>
                    </View>
                    <Text style={{ color: THEME.MAIN_COLOR, fontFamily: 'Inter', fontSize: 16 }}>+ 1 000 ₽</Text>
                </View>
            </View>
            <View style={{ height: 50, width: THEME.WIDTH, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('OperationsInfo')}>
                    <Text style={{ color: THEME.MAIN_COLOR, fontSize: 15, fontWeight: '600' }}>Смотреть всю историю</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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