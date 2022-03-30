import {  View, StyleSheet, ImageBackground } from "react-native"
import { THEME } from '../config'

export const CashBack = () => {
    return (
        <View style={styles.wrapper}>
            
            <View style={styles.cashback}>
                <ImageBackground style={styles.image} source={require('../../assets/in-app-icons/cashback.jpg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    image: {
        width: THEME.WIDTH,
        height: '100%',
    },
    cashback: {
        width: THEME.WIDTH,
        height: THEME.HEIGHT*0.2,
        alignItems: 'center',
    }
})