import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./tabHomeStyle";
import { doctors } from "../../constants/dumpData";
import Doctor from "../../components/doctor.jsx/doctor";

export default function TabHome(props) {

    function clickDoctor(id_doctor, name, speciality, icon) {
        
        console.log("cliquei", id_doctor, name, speciality, icon)
        props.navigation.navigate("services",
            {
                id_doctor,
                name,
                speciality,
                icon
            }
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Agende um serviço com seu médico</Text>
                <FlatList style={styles.flatList}
                    data={doctors}
                    keyExtractor={(item) => item.id_doctor}
                    renderItem={({ item }) => < Doctor
                        id_doctor={item.id_doctor}
                        name={item.name}
                        speciality={item.specialty}
                        icon={item.icon}
                        onPressi={clickDoctor}
                    />
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}