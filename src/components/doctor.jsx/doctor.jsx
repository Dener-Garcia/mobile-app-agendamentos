import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './docktor.styles'
import FemaleDoctor from "../../../assets/femaleDoctor";
import MaleDoctor from "../../../assets/maleDoctor";

export default function Doctor({ name, speciality, isMale }) {

    return (
        <View>
            <TouchableOpacity style={styles.container}>
                {isMale ?
                    <MaleDoctor width={40} height={40} />
                    :
                    <FemaleDoctor width={40} height={40} />
                }
                <View>
                <Text>{name}</Text>
                <Text>{speciality}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
