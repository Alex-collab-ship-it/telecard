import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { THEME } from '../theme'

export const BillInfoScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>О счете</Text>

                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Номер договора</Text>
                        <Text style={{ fontSize: 16 }}>УПР-120/21-26693</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Номер счёта</Text>
                        <Text style={{ fontSize: 16 }}>40817810500200888476</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Дата открытия</Text>
                        <Text style={{ fontSize: 16 }}>01.11.2021</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Базовая процентная ставка</Text>
                        <Text style={{ fontSize: 16 }}>14% годовых</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Процентная ставка с учетом надбавок</Text>
                        <Text style={{ fontSize: 16 }}>15.5% годовых</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Возможность пополнения</Text>
                        <Text style={{ fontSize: 16 }}>Да</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={{ color: THEME.GRAY_COLOR, marginBottom: 5 }}>Возможность снятия</Text>
                        <Text style={{ fontSize: 16 }}>Да</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center', }}>
                            <View style={{ 
                                width: 30,
                                height: 30,
                                borderRadius: 12,
                                backgroundColor: '#1852E5',
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center'
                            }}>
                                <Text style={{ color: '#fff', fontSize: 16 }}>₽</Text>
                            </View>
                            <View style={{ flexDirection: 'column',  marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 4 }}>Как заработать больше?</Text>
                                <Text style={{ fontSize: 13, color: THEME.GRAY_COLOR }}>Подробнее об условиях</Text>
                            </View>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={THEME.GRAY_COLOR} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
    },
    wrapper: {
        flexDirection: 'column',
        width: '100%',
        paddingVertical: 9
    }
})