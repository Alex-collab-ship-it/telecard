import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { AppLoader } from '../components/AppLoader';
import { THEME } from '../theme'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
export const OperationsScreen = () => {

    const [refreshing, setRefreshing] = useState(true);

    if (refreshing) {
        const f = async () => await wait(700).then(() => setRefreshing(false));
        f()
        return (
            <AppLoader size={'large'} />
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingBottom: 20, paddingHorizontal: 25 }}>
            <View style={[styles.wrapper, { borderTopWidth: 0 }]}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>Пополнение на остаток по счету</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>01.03.2022</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold'}}>+ 3750 ₽</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>Пополнение на остаток по счету</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>01.02.2022</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold'}}>+ 3750 ₽</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>Пополнение на остаток по счету</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>01.01.2022</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold'}}>+ 3750 ₽</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>Пополнение на остаток по счету</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>01.12.2021</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold'}}>+ 3750 ₽</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>Пополнение</Text>
                    <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>01.11.2021</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold'}}>+ 500 000 ₽</Text>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopColor: THEME.BORDER_COLOR,
        borderTopWidth: 0.3,
    }
})