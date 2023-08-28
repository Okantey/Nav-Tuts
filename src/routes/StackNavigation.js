import { GetStarted, Welcome, VerifyRegistration, RegistrationDetails, Home, Login, Recent, Account, AddTrip } from './../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './TabsNavigation';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  )
}

const StartUp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="VerifyRegistration" component={VerifyRegistration} />
      <Stack.Screen name="RegistrationDetails" component={RegistrationDetails} />
    </Stack.Navigator>
  )
}


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTrip" component={AddTrip} />
    </Stack.Navigator>
  )
}

const RecentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Recent" component={Recent} />
    </Stack.Navigator>
  )
}

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}


export { MainStack, StartUp, AuthStack, HomeStack, RecentStack, AccountStack }