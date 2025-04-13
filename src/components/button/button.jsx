import { Text, TouchableOpacity } from "react-native"
import { styles } from './buttons.style'

export default function Button({ label, type }) {

    function teste() {
        alert("teste")
    }

    return (
        <TouchableOpacity style={[styles.btn, type === "danger" ?
            styles.typeDanger : styles.typePrimary]}
            onPress={teste} >
            <Text style={styles.text} >
                {label}
            </Text>
        </TouchableOpacity >
    )
}