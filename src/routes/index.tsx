import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hook/useAuth";
import Welcome from "../screens/Welcome";

export type PropsNavigationStack = {
    Welcome: undefined;
}

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
    const { token } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false,
                        animation: "none"
                    }
                }
            >
                {
                    token === null ? (
                        <>
                            <Stack.Screen name="Welcome" component={Welcome} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Welcome" component={Welcome} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;