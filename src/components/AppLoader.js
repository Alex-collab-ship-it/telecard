import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { THEME } from '../config'

export const AppLoader = ({ size }) => (
    <View style={styles.center}>
        <ActivityIndicator size={size} color={THEME.MAIN_COLOR} />
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})