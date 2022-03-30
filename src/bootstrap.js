import { loadAsync } from 'expo-font';
import { DB } from './db';
import { data } from './data';

export async function bootstrap() {
    await loadAsync({
        InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
        Inter: require('../assets/fonts/Inter-SemiBold.ttf'),
        InterBold: require('../assets/fonts/Inter-ExtraBold.ttf')
    });
    try {
        await DB.init(data)
        console.log('Database started...')
    } catch (e) {
        console.log('Error: ', e)
    }
}