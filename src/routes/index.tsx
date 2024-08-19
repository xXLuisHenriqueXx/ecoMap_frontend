import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hook/useAuth";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import User from "../screens/User";
import Map from "../screens/Map";
import { User as UserEntitie } from "../entities/User";
import UpdateProfile from "../screens/UpdateProfile";

export type PropsNavigationStack = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
    User: undefined;
    Map: undefined;
    UpdateProfile: { 
        userInfo?: UserEntitie;
    };
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
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Register" component={Register} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Map" component={Map} />
                            <Stack.Screen name="User" component={User} />
                            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;