import { Text, View } from "react-native";
import { styles } from "./tabProfileStyle";

export default function TabProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.output}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.subTitle}>User Name</Text>
            </View>
            <View style={styles.output}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.subTitle}>usermail@mail.com</Text>
            </View>
        </View>
    )
}