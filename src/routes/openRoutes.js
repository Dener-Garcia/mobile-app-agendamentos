import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Account from "../screens/account/account";
import Login from "../screens/login/login";

const Stack = createNativeStackNavigator();

export default function OpenRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login}
                options={
                    { headerShown: false }
                } />
            <Stack.Screen name="account" component={Account} 
            options={
                { headerShown: false }
            } />
        </Stack.Navigator>
    )
}