import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LogoMain from "../../../assets/logoMain"
import HouseIcon from "../../../assets/house";


import TabHome from "../tabHome/tabHome";
import TabCallendar from "../tabCallendar/tabCallendar";
import TabProfile from "../tabProfile/tabProfile";
import UserIcon from "../../../assets/user";
import AppointmentIcon from "./Appointment";


const Tab = createBottomTabNavigator()


export default function Main() {

    return (

            <Tab.Navigator>
                
                <Tab.Screen name="Home" component={TabHome} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <LogoMain />
                                <Text>Agenda ai - Médicos</Text>
                            </View>
                        )
                    },
                    tabBarIcon: ({focused}) => { return <HouseIcon size={32} focused={focused} />}
                }} />

                <Tab.Screen name="Agendamentos" component={TabCallendar} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <LogoMain />
                                <Text>Agenda ai - Agendamento</Text>
                            </View>
                        )
                    },
                    tabBarIcon: ({focused}) => { return <AppointmentIcon size={32} focused={focused}/>}
                }} />

                <Tab.Screen name="Perfil" component={TabProfile} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <LogoMain />
                                <Text>Agenda ai - Perfil usuário</Text>
                            </View>
                        )
                    },
                    tabBarIcon: ({focused}) => { return < UserIcon size={32} focused={focused}/>}
                }} />
            </Tab.Navigator>

    )
}