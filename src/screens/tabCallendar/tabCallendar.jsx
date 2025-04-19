import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./tabCallendarStyle";
import { appointments } from "../../constants/dumpData";
import AppointmentCard from "../../components/appointment/appointment";


export default function TabCallendar() {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Suas reservas</Text>
                <FlatList style={styles.flatList}
                    data={appointments}
                    keyExtractor={(item) => item.id_appointment}
                    renderItem={({ item }) =>
                        <AppointmentCard doctor={item.name}
                            service={item.service} specialty={item.specialty} date={item.booking_date} hour={item.booking_hour} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}