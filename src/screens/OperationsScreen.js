import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppLoader } from '../components/AppLoader';
import { useDispatch, useSelector } from 'react-redux'
import { THEME, toOparationFormat } from '../config'
import { load } from '../store/actions/transactionActions';




export const OperationsScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load('bill'))
    }, [dispatch])
    const bill = useSelector(state => state.operations.bill)
    const loading = bill.loading
    if (loading) {
        return (
          <AppLoader size={'large'} />
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingBottom: 20, paddingHorizontal: 0 }}>
            <FlatList style={{ flex: 1,width: THEME.WIDTH,  paddingHorizontal: 20 }}
                ItemSeparatorComponent={() => (<View style={{ width: '100%', height: 0.5, backgroundColor: THEME.BORDER_COLOR }} />)}
                data={bill.transactions} keyExtractor={item => item.id} renderItem={({ item }) => <Transaction item={item}/>} />
        </View>
    )
}

function Transaction({ item }) {
    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16}}>{item.type}</Text>
                <Text style={{ color: THEME.GRAY_COLOR, fontSize: 12}}>{item.date}</Text>
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{toOparationFormat(item.amount)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    }
})