import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from "../screens/MainScreen";
import { PinScreen } from "../screens/PinScreen";;
import { Ionicons, Fontisto, Feather } from '@expo/vector-icons';
import { SchetScreen } from "../screens/SchetScreen";
import { THEME } from "../theme";
import { BillInfoScreen } from '../screens/BillInfoScreen';
import { OperationsScreen } from '../screens/OperationsScreen';
import { TransferScreen } from '../screens/transactions/Transfer';


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

function TransScreen() {
    return (<TransferScreen />)
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


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                        headerTintColor: '#000',
                        headerShadowVisible: false,
                        headerRight: () => (<ImageBackground style={{ width: 35, height: 35 }} source={require('../../assets/in-app-icons/settings.png')} /> )
                    }}/>
                <Stack.Screen name="BillInfoScreen" component={BScreen}
                    options={{
                        title: 'adas',
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
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
      );
}



