import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted, SplashScreen, Welcome } from "../screens";

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
};

export default Navigation = () => {
  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  );
};
