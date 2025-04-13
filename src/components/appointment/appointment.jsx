import { Text, View } from "react-native";
import CallendarIcon from "../../../assets/callendar-icon";
import ClockIcon from "../../../assets/clock-icon";
import { styles } from './appointment.styles'
import Button from "../button/button";

export default function AppointmentCard({ service, doctor, specialty, date, hour }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{doctor}</Text>
            <Text style={styles.subTitle}>{service} - {specialty}</Text>
            <View style={styles.containerAppointment}>
                <View style={styles.content}>
                    <View style={styles.titleContent}>
                        <CallendarIcon />
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.titleContent}>
                        <ClockIcon />
                        <Text>{hour}</Text>
                    </View>
                </View>
                <View style={styles.ctaContainer}>
                    <Button label={"🗑️ Cancelar"} type={"danger"} />
                </View>
            </View>
        </View>
    )
}