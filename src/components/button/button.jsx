import { Text, TouchableOpacity } from "react-native"
import { styles } from './buttons.style'

export default function Button({ label, type, onPressi }) {
    return (
        <TouchableOpacity style={[styles.btn, type === "danger" ?
            styles.typeDanger : styles.typePrimary]}
            onPress={onPressi}
        >
            <Text style={styles.text} >
                {label}
            </Text>
        </TouchableOpacity >
    )
}