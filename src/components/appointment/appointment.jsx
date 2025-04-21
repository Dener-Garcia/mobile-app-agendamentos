import { Text, View } from "react-native";
import CallendarIcon from "../../../assets/callendar-icon";
import ClockIcon from "../../../assets/clock-icon";
import CoinIcon from "../../../assets/coin-icon";
import { styles } from './appointment.styles'
import Button from "../button/button";

export default function AppointmentCard({ service, doctor, specialty, date, hour, price, onPressi, idAppointment }) {

    //2025-11-14T10:12:33
    formateDate = new Date(date + "T" + hour)
    console.log("novadata",formateDate,"antiga", date, hour, "so a data",formateDate.toLocaleDateString())
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{doctor}</Text>
            <Text style={styles.subTitle}>{service} - {specialty}</Text>
            <View style={styles.containerAppointment}>
                <View style={styles.content}>
                    <View style={styles.titleContent}>
                        <CallendarIcon />
                        <Text>{formateDate.toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.titleContent}>
                        <ClockIcon />
                        <Text>{hour}</Text>
                    </View>
                    <View style={styles.titleContent}>
                        <CoinIcon />
                        <Text>{price}</Text>
                    </View>
                </View>
                <View style={styles.ctaContainer}>
                    <Button label={"🗑️ Cancelar"} type={"danger"} onPressi={()=> onPressi(idAppointment, doctor)} />
                </View>
            </View>
        </View>
    )
}