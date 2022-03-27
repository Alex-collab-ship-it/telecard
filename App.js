import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { PinScreen } from './src/screens/PinScreen';
import { useFonts } from 'expo-font';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter-SemiBold.ttf')
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      { isLoggedIn ? <AppNavigation />: <PinScreen click={setIsLoggedIn} /> }
    </>
  )
}

