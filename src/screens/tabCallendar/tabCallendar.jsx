import { FlatList, SafeAreaView, Text, ToastAndroid, View } from "react-native";
import { styles } from "./tabCallendarStyle";
// import { appointments } from "../../constants/dumpData";
import AppointmentCard from "../../components/appointment/appointment";
import { urlUserAppointment } from "../../constants/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";

export default function TabCallendar(props) {

    const { user } = useContext(AuthContext)

    const [appointments, setAppointments] = useState([])

    async function loadAppointments() {
        try {
            const response = await fetch(urlUserAppointment, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${user.token}`
                }
            })

            const data = await response.json()
                       console.log(data)
            if (!response.ok) {
                throw new Error(data.error)
            }

            setAppointments(data)

        } catch (err) {
            console.log(err)
            Alert.alert('Erro',
                err.message,
                [
                    {
                        text: 'Entendido',
                        style: 'cancel',
                    },
                ],
                {
                    cancelable: true,
                }
            )
        }
    }

    async function deleteAppointment(idAppointment, doctor) {
        console.log(idAppointment, doctor)
        try {
            const response = await fetch(`${urlUserAppointment}${idAppointment}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${user.token}`
                }
            })

            console.log("dentro delete", response.ok)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error)
            }

            ToastAndroid.show("Cancelada consulta do Dr: " + doctor, ToastAndroid.LONG)
            
            loadAppointments()

        } catch (err) {
            console.log(err)
            Alert.alert('Erro',
                err.message,
                [
                    {
                        text: 'Entendido',
                        style: 'cancel',
                    },
                ],
                {
                    cancelable: true,
                }
            )
        }
    }

    useEffect(() => {
        loadAppointments()
        console.log("atualizou")
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Suas reservas</Text>
                <FlatList style={styles.flatList}
                    data={appointments}
                    keyExtractor={(item) => item.id_appointment}
                    renderItem={({ item }) =>
                        <AppointmentCard
                            idAppointment={item.id_appointment}
                            doctor={item.doctor}
                            service={item.description} 
                            specialty={item.specialty} 
                            date={item.booking_date} 
                            hour={item.booking_hour}
                            price={item.price}
                            onPressi={deleteAppointment}
                            />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}
