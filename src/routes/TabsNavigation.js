import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, RecentStack, AccountStack } from "./StackNavigation";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
export default TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarLabelStyle: { fontFamily: "Cabin-Bold", fontSize: 18 },
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { width: "90%", alignSelf: "center", borderRadius: 30, height: 70, paddingVertical: 5, marginVertical: 10, backgroundColor: "whitesmoke" }
    }} >
      <Tab.Screen name="HomeTab" component={HomeStack}
        options={{ tabBarIcon: (props) => <Ionicons name="home" size={30} color={props.focused ? "#000" : "gray"} /> }} />
      <Tab.Screen name="RecentTab" component={RecentStack}
        options={{ tabBarIcon: (props) => <FontAwesome5 name="history" size={30} color={props.focused ? "#000" : "gray"} /> }} />
      <Tab.Screen name="AccountTab" component={AccountStack}
        options={{ tabBarIcon: (props) => <Ionicons name="person" size={30} color={props.focused ? "#000" : "gray"} /> }} />
    </Tab.Navigator>
  )
}