import { useCallback, useState, useEffect } from "react"
import { ScrollView, StyleSheet, SafeAreaView, RefreshControl, ActivityIndicator } from "react-native"
import { Additionals } from "../components/Additionals"
import { CashBack } from "../components/CashBack"
import { useDispatch, useSelector } from "react-redux";
import { loadBalance } from "../store/actions/transactionActions";
import { THEME } from "../config";
import { AppLoader } from "../components/AppLoader";



export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBalance())
    }, [dispatch])
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(loadBalance()).then(() => setRefreshing(false));
    }, []);
    const balance = useSelector(state => state.operations.balance)
    const loading = useSelector(state => state.operations.balance.loading)

    if (loading) {
        dispatch(loadBalance()).then(() => setRefreshing(false));
        return <AppLoader size={'large'} />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} overScrollMode="never"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[THEME.MAIN_COLOR]} />}>
                <CashBack />
                <Additionals navigation={navigation} balance={balance} />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  THEME.MENU_COLOR,
    },
})