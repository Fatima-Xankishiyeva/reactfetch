import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./Home";
import Onboarding from "./Onboarding";


const Drawer=createDrawerNavigator()

export const DrawerNavigator=()=> {
    return(
         <Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeDrawer">
            <Drawer.Screen name='HomeDrawer' component={Home} />
            <Drawer.Screen name='OnboardingDrawer' component={Onboarding} />
         </Drawer.Navigator>
    )
}