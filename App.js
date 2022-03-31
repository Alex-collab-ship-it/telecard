import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Provider } from 'react-redux'
import { AppNavigation } from './src/navigation/AppNavigation';
import { PinScreen } from './src/screens/PinScreen';
import store from './src/store'
import { bootstrap } from './src/bootstrap';
import { formatMobileNumber, onlyDigits } from './src/config';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      { isLoggedIn ? <AppNavigation />: <PinScreen click={setIsLoggedIn} /> }
    </Provider>
  )
}

