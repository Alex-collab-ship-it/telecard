import { useCallback, useState } from "react"
import { ScrollView, StyleSheet, SafeAreaView, RefreshControl, ActivityIndicator } from "react-native"
import { Additionals } from "../components/Additionals"
import { CashBack } from "../components/CashBack"
import { THEME } from "../theme";

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

export const MainScreen = ({navigation, route}) => {
    
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1300).then(() => setRefreshing(false));
      }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} overScrollMode="never"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[THEME.MAIN_COLOR]} />}>
                <CashBack />
                <Additionals navigation={navigation} />
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