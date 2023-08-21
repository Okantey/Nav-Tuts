import "react-native-gesture-handler";
import Navigation from "./src/routes/Navigation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GetStarted, SplashScreen} from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="GetStarted" component={GetStarted} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
