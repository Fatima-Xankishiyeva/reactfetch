import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Onboarding from "./Onboarding";
import Home from "./Home";
import { DrawerNavigator } from "./Drawer";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen 
                name='Drawer' 
                component={DrawerNavigator} 
                options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;