import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from "../screens/main/main";
import Service from "../screens/services/services"
import Schedule from "../screens/schedule/schedule"

const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main}
                options={
                    { headerShown: false }
                } />
            <Stack.Screen name="services" component={Service}
                options={
                    { headerShown: false }
                } />
            <Stack.Screen name="schedule" component={Schedule}
                options={
                    { headerShown: false }
                } />
        </Stack.Navigator>
    )

}