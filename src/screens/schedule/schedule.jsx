import { useContext, useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { styles } from "./scheduleStyle";
import { urlUserAppointment } from "../../constants/api";
import { AuthContext } from "../../context/auth";

import { Picker } from "@react-native-picker/picker";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBr } from "../../constants/calendarConfig";
import Button from "../../components/button/button";

LocaleConfig.locales['pt'] = ptBr
LocaleConfig.defaultLocale = 'pt';

export default function Schedule(props) {

    const idDoctor = props.route.params.idDoctor
    const idService = props.route.params.id_service
    const doctorName = props.route.params.doctorName

    const { user } = useContext(AuthContext)
    const [selectedt, setSelectedt] = useState(today)
    const [selectedHour, setSelectedHour] = useState();

    const today = new Date().toDateString().slice(0, 10)

    async function clickBooking() {
        console.log("clickBooking pg calendario", idService, idDoctor, doctorName, selectedt, selectedHour, user.token)
        try {
            const response = await fetch(urlUserAppointment, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    id_service: idService,
                    booking_date: selectedt,
                    booking_hour: selectedHour,
                    id_doctor: idDoctor,
                })
            })

            const data = response.json()
            console.log("dentro marcacao," ,data)
            if (!response.ok) {
                throw new Error(data.error)
            }
            ToastAndroid.show("Consulta agendada com " + doctorName, ToastAndroid.LONG)

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


    return (
        <View style={styles.container}>
            <Text>service{idDoctor}</Text>
            <Calendar style={styles.theme}

                //     current={selectedt}

                onDayPress={(day) => {
                    setSelectedt(day.dateString)
                }}

                markedDates={
                    { [selectedt]: { selected: true } }
                }

                minDate={
                    new Date().toDateString()
                }
            />

            <View>
                <Text style={styles.label}>Selecione um horário</Text>
                <View>
                    <Picker selectedValue={selectedHour}
                        onValueChange={(item, itemIndex) =>
                            setSelectedHour(item)
                        }
                    >
                        <Picker.Item label="09:00" value={"09:00"} />
                        <Picker.Item label="10:00" value={"10:00"} />
                        <Picker.Item label="11:00" value={"11:00"} />
                        <Picker.Item label="12:00" value={"12:00"} />
                    </Picker>
                </View>
            </View>
            <Button label={"Confirmar"} onPressi={clickBooking} />
        </View>
    )
}