import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from "../screens/MainScreen";
import { PinScreen } from "../screens/PinScreen";;
import { Ionicons, Fontisto, Feather } from '@expo/vector-icons';
import { SchetScreen } from "../screens/SchetScreen";
import { THEME } from "../config";
import { BillInfoScreen } from '../screens/BillInfoScreen';
import { OperationsScreen } from '../screens/OperationsScreen';
import { TransferScreen } from '../screens/transactions/bill/Transfer';
import { Confirm } from '../screens/transactions/bill/Confirm';
import { Success } from '../screens/transactions/bill/Success';
import { CardScreen } from '../screens/CardScreen';
import { ChooseScreen } from '../screens/transactions/card/ChooseScreen';
import { CardTransfer } from '../screens/transactions/card/Transfer';
import { TypeScreen } from '../screens/transactions/card/TypeScreen';
import { CardConfirm } from '../screens/transactions/card/Confirm';
import { CardSuccess } from '../screens/transactions/card/Success';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <MainScreen navigation={navigation} />
    );
}
function LoginScreen() {
    return (
        <PinScreen />
    );
}


function SchScreen({ navigation }) { return (<SchetScreen navigation={navigation} />)}

function BScreen() {
    return (<BillInfoScreen />)
}

function OScreen() {
    return (<OperationsScreen />)
}

function TransScreen({ navigation, route }) {
    return (<TransferScreen navigation={navigation} route={route} />)
}
function ConfScreen({  navigation, route }) {
    return (<Confirm navigation={navigation} route={route} />)
}
function CardConfScreen({  navigation, route }) {
    return (<CardConfirm navigation={navigation} route={route} />)
}
function SuccessScreen({ navigation }) {
    return (<Success navigation={navigation} />)
}
function CardScsScreen({ navigation }) {
    return (<CardSuccess navigation={navigation} />)
}
function CardScr({ navigation }) {
    return (<CardScreen navigation={navigation} />)
}
function ChScreen({ navigation }) {
    return (<ChooseScreen navigation={navigation} />)
}
function CardTrasferScreen({ navigation, route }) {
    return (<CardTransfer navigation={navigation} route={route} />)
}
function TypeScr({ navigation, route }) {
    return (<TypeScreen navigation={navigation} route={route} />)
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShadowVisible: false,
            }}>
                <Stack.Screen name="Main" component={BottomNavigator}
                    options={{
                        title: '  Кристина',
                        headerStyle: {
                            backgroundColor: '#f5f5f5',
                        },
                        headerTitleStyle: {
                            fontSize: 16,
                            fontWeight: '500'
                        },
                        headerShadowVisible: false,
                        headerTintColor: '#000',
                        headerRight: () => (<Ionicons name="notifications-outline" size={26} color="black" />),
                        headerLeft: () => (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#858bec',
                                    marginHorizontal: 3,
                                    borderRadius: 20 }}>
                                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }} >К</Text>
                            </View>
                        ),
                    }}
                    />
                <Stack.Screen name="Schet" component={SchScreen}
                    options={{
                        title: 'Мои счета',
                        headerStyle: {
                            backgroundColor: THEME.MENU_COLOR,
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: '#000',
                        headerShadowVisible: false,
                        headerRight: () => (<ImageBackground style={{ width: 35, height: 35 }} source={require('../../assets/in-app-icons/settings.png')} /> )
                    }}/>
                <Stack.Screen name="BillInfoScreen" component={BScreen}
                    options={{
                        title: 'Счет',
                        headerShadowVisible: false,
                    }}/>
                <Stack.Screen name="OperationsInfo" component={OScreen}
                    options={{
                        title: 'Все операции',
                        headerShadowVisible: false,
                    }}/>
                <Stack.Screen name="Transfer" component={TransScreen}
                    options={{
                        title: 'Между счетами',
                        headerTitleAlign: 'center',
                    }}/>
                <Stack.Screen name="Confirm" component={ConfScreen}
                    options={{
                        title: 'Проверьте данные',
                        headerTitleAlign: 'center',
                    }}/>
                <Stack.Screen name="Success" component={SuccessScreen}
                    options={{
                        headerShown: false
                    }}/>
                <Stack.Screen name="CardSuccess" component={CardScsScreen}
                    options={{
                        headerShown: false
                    }}/>
                <Stack.Screen name="CardScreen" component={CardScr}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.MENU_COLOR,
                        },
                        title: 'Мои карты',
                        headerTitleAlign: 'center',
                        headerRight: () => (<ImageBackground style={{ width: 35, height: 35 }} source={require('../../assets/in-app-icons/settings.png')} /> )
                    }}/>
                <Stack.Screen name="Choose" component={ChScreen}
                    options={{
                        title: ''
                    }}/>
                <Stack.Screen name="CardTransfer" component={CardTrasferScreen}
                    options={{
                        title: 'Перевод'
                    }}/>
                <Stack.Screen name="TypeScreen" component={TypeScr}
                    options={{
                        title: 'Способ перевода'
                    }}/>
                <Stack.Screen name="CardConfirm" component={CardConfScreen}
                    options={{
                        headerTitle: () => (<ImageBackground style={{ width: 70, height: 35 }} source={require('../../assets/in-app-icons/sbp.png')} />),
                        headerTitleAlign: 'center',
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
    ico: {
        width: 25,
        height: 25
    }
})

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            headerStyle={{
                backgroundColor: THEME.MENU_COLOR
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
      
                  if (route.name === 'Главный') {
                    icon = focused
                      ? <ImageBackground style={styles.ico} source={require('../../assets/in-app-icons/menu-active.png')}/>
                      : <ImageBackground style={styles.ico} source={require('../../assets/in-app-icons/menu-icon.png')}/>;
                  } else if (route.name === 'Переводы') {
                    icon = focused ? <Fontisto name="arrow-swap" size={24} color={color} style={{ opacity: 1 }} /> : 
                    <Fontisto name="arrow-swap" size={24} color={color} style={{ opacity: 1 }} />;
                  } else {
                      icon = focused ? <Feather name="more-horizontal" size={40} color={color} /> :
                      <Feather name="more-horizontal" size={40} color={color} />
                  }
                  return icon;
                },
                tabBarActiveTintColor: THEME.MAIN_COLOR,
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: 'bold'
                },
                tabBarStyle: {
                    alignItems: 'flex-end',
                    backgroundColor: THEME.MENU_COLOR,
                    height: 75,
                    paddingBottom: 15,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }
              })}
            >
            <Tab.Screen name="Главный" component={HomeScreen}/>
            <Tab.Screen name="Переводы" component={HomeScreen} />
            <Tab.Screen name="Еще" component={HomeScreen} />
        </Tab.Navigator>
    );
}



