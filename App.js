import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import "react-native-gesture-handler";
import "react-native-safe-area-context"
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GetStarted, SplashScreen, Welcome, VerifyRegistration, RegistrationDetails, Home, Login, Recent, Account } from './src/screens';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator()
const StarterGroup = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SplashScreen" component={SplashScreen} />
			<Stack.Screen name="GetStarted" component={GetStarted} />
			<Stack.Screen name="LoginGroup" component={LoginGroup} />
			<Stack.Screen name="RegisterGroup" component={RegisterGroup} />
		</Stack.Navigator>
	);
};

const RegisterGroup = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="VerifyRegistration" component={VerifyRegistration} />
			<Stack.Screen name="RegistrationDetails" component={RegistrationDetails} />
			<Stack.Screen name="HomeGroup" component={HomeGroup} />
		</Stack.Navigator>
	)
}

const LoginGroup = () => {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="HomeGroup" component={HomeGroup} />
		</Stack.Navigator >
	)
}

const HomeGroup = () => {
	return (
		<BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
			<BottomTab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <AntDesign name="home" size={30} color="black" /> }} />
			<BottomTab.Screen name="Recent" component={Recent} options={{ tabBarIcon: () => <MaterialIcons name="history" size={34} color="black" /> }} />
			<BottomTab.Screen name="Account" component={Account} options={{ tabBarIcon: () => <Feather name="user" size={30} color="black" /> }} />
		</BottomTab.Navigator>
	)
}



export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	const loadFonts = async () => {
		await Font.loadAsync({
			"Karla-Light": require("./assets/fonts/Karla-Light.ttf"),
			"Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
			"Karla-Medium": require("./assets/fonts/Karla-Medium.ttf"),
			"Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
			"Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
			"Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
			"Syne-Regular": require("./assets/fonts/Syne-Regular.ttf"),
			"Syne-Bold": require("./assets/fonts/Syne-Bold.ttf"),
			"Syne-ExtraBold": require("./assets/fonts/Syne-ExtraBold.ttf"),
		})
		setFontsLoaded(true)
	}

	useEffect(() => {
		loadFonts()
	}, [])
	return (
		fontsLoaded ? (

			<NavigationContainer>
				<StarterGroup />
			</NavigationContainer>

		) : (
			<View>
				<Text>Loading..</Text>
			</View>
		)

	);
}
