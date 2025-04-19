import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './docktor.styles'
import FemaleDoctor from "../../../assets/femaleDoctor";
import MaleDoctor from "../../../assets/maleDoctor";

export default function Doctor({ id_doctor, name, speciality, icon, onPressi }) {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => onPressi(id_doctor, name, speciality, icon)}>
                {icon === "M" ?
                    <MaleDoctor width={40} height={40} />
                    :
                    <FemaleDoctor width={40} height={40} />
                }
                <View>
                    <Text>{name}</Text>
                    <Text>{speciality}</Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}
